import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { HttpStatus, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { sendMovieNotification } from "src/utils/mailer";
import { defaultResponse } from "src/utils/response.utils";
import { z } from "zod";
import { PrismaService } from "../prisma/prisma.service";
import { GetAllMoviesSchema, MoviesUpdateInputSchema } from "./dto";

@Injectable()
export class MoviesService {
  private readonly s3Client = new S3Client({
    region: "us-east-1",
  });
  private readonly bucketName = "cubosmoviesimages";
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  // ─── QUERIES ────────────────────────────────────────────

  async getAll({
    DateMax,
    DateMin,
    DurationMax,
    DurationMin,
    Genres,
    page,
  }: z.infer<typeof GetAllMoviesSchema>) {
    const where: Prisma.MoviesWhereInput = {
      AND: [
        DateMin ? { release_date: { gte: DateMin } } : {},
        DateMax ? { release_date: { lte: DateMax } } : {},
        DurationMin ? { duration: { gte: DurationMin } } : {},
        DurationMax ? { duration: { lte: DurationMax } } : {},
        Genres && Genres.length > 0
          ? {
              genre: {
                some: {
                  id: {
                    in: Genres,
                  },
                },
              },
            }
          : {},
      ],
    };

    const movies = await this.prismaService.movies.findMany({
      where,
      include: {
        genre: true,
      },
      take: 10,
      skip: page ? (page - 1) * 10 : 0,
    });

    return movies;
  }

  async getPageTotal() {
    const count = await this.prismaService.movies.count();
    return Math.ceil(count / 10);
  }

  async get(id: number) {
    return this.prismaService.movies.findUnique({
      where: { id },
      include: {
        genre: true,
      },
    });
  }

  async exists({ id, name }: { id?: number; name?: string }) {
    if (id) {
      const movie = await this.prismaService.movies.findUnique({
        where: { id },
      });
      return defaultResponse({
        message: "Movie exists",
        status: HttpStatus.OK,
        body: {
          exists: !!movie,
          id: movie?.id,
        },
      });
    }

    if (name) {
      const movie = await this.prismaService.movies.findFirst({
        where: {
          title: {
            contains: name,
            mode: "insensitive",
          },
        },
      });

      return defaultResponse({
        message: "Movie exists",
        status: HttpStatus.OK,
        body: {
          exists: !!movie,
          id: movie?.id,
        },
      });
    }

    return defaultResponse({
      message: "Movie not found",
      status: HttpStatus.NOT_FOUND,
      body: {
        exists: false,
      },
    });
  }

  async existsByName(name: string) {
    return !!(await this.prismaService.movies.findFirst({
      where: {
        title: {
          contains: name,
          mode: "insensitive",
        },
      },
    }));
  }

  async getMoviePoster(id: number) {
    try {
      const Key = `movie-poster-${id}.jpg`;
      const { Body } = await this.s3Client.send(
        new GetObjectCommand({
          Bucket: this.bucketName,
          Key,
        }),
      );
      if (!Body) {
        throw new Error("Poster not found");
      }
      const url = `${this.configService.getOrThrow<string>("AWS_BUCKET_URL")}/${Key}`;
      return defaultResponse({
        message: "Movie poster fetched successfully",
        status: HttpStatus.OK,
        body: {
          url,
        },
      });
    } catch (error) {
      console.error("Error fetching movie poster:", error);
      throw error;
    }
  }

  async getMovieBackdrop(id: number) {
    try {
      const Key = `movie-backdrop-${id}.jpg`;
      const { Body } = await this.s3Client.send(
        new GetObjectCommand({
          Bucket: this.bucketName,
          Key,
        }),
      );
      if (!Body) {
        throw new Error("Backdrop not found");
      }
      const url = `${this.configService.getOrThrow<string>("AWS_BUCKET_URL")}/${Key}`;
      return defaultResponse({
        message: "Movie backdrop fetched successfully",
        status: HttpStatus.OK,
        body: {
          url,
        },
      });
    } catch (error) {
      console.error("Error fetching movie backdrop:", error);
      throw error;
    }
  }

  // ─── MUTATIONS ────────────────────────────────────────────

  async delete(id: number) {
    try {
      await this.prismaService.movies.delete({
        where: { id },
      });

      return defaultResponse({
        message: "Movie deleted successfully",
        status: HttpStatus.OK,
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.error("Prisma error during delete:", error);
      }
      throw error;
    }
  }

  async create(data: Prisma.MoviesCreateInput) {
    try {
      const createdMovie = await this.prismaService.movies.create({ data });
      // Check if release date is in the future
      if (new Date(data.release_date) > new Date()) {
        await sendMovieNotification(data);
      }
      return defaultResponse({
        message: "Movie created successfully",
        status: HttpStatus.CREATED,
        body: {
          id: createdMovie.id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.error("Prisma error during create:", error);
        // Handle specific error codes if needed
      }
      throw error;
    }
  }

  private getSearchQuery(search: string) {
    return {
      OR: ["title", "original_title", "subtitle", "synopsis"].map((field) => ({
        [field]: {
          contains: search,
          mode: "insensitive",
        },
      })),
    };
  }

  async search(search: string) {
    const movies = await this.prismaService.movies.findMany({
      where: this.getSearchQuery(search),
    });

    if (!movies || movies.length === 0) return [];

    return movies;
  }

  async update(data: z.infer<typeof MoviesUpdateInputSchema>) {
    try {
      const updatedMovie = await this.prismaService.movies.update({
        where: { id: data.id },
        data,
      });

      return updatedMovie;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.error("Prisma error during update:", error);
      }
      throw error;
    }
  }

  async uploadPoster(movieId: number, file: Buffer) {
    try {
      const fileName = `movie-poster-${movieId}.jpg`;
      const params = {
        Bucket: this.bucketName,
        Key: fileName,
        Body: file,
        ContentType: "image/jpeg",
      };

      await this.s3Client.send(new PutObjectCommand(params));

      const updatedMovie = await this.prismaService.movies.update({
        where: { id: movieId },
        data: {
          poster: `${this.configService.getOrThrow<string>("AWS_BUCKET_URL")}/${fileName}`,
        },
      });

      return updatedMovie;
    } catch (error) {
      console.error("Error uploading poster:", error);
      throw error;
    }
  }

  async uploadBackdrop(movieId: number, file: Buffer) {
    try {
      const fileName = `movie-backdrop-${movieId}.jpg`;
      const params = {
        Bucket: this.bucketName,
        Key: fileName,
        Body: file,
        ContentType: "image/jpeg",
      };

      await this.s3Client.send(new PutObjectCommand(params));

      const updatedMovie = await this.prismaService.movies.update({
        where: { id: movieId },
        data: {
          backdrop: `${this.configService.getOrThrow<string>("AWS_BUCKET_URL")}/${fileName}`,
        },
      });

      return updatedMovie;
    } catch (error) {
      console.error("Error uploading backdrop:", error);
      throw error;
    }
  }
}
