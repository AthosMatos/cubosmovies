import { HttpStatus, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

import { Prisma } from "@prisma/client";
import { defaultResponse } from "src/utils/response.utils";
import { z } from "zod";
import { PrismaService } from "../prisma/prisma.service";
import { MoviePosterSchema } from "./dto";

@Injectable()
export class MoviesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async delete(id: number) {
    try {
      const dbres = await this.prismaService.movies.delete({
        where: {
          id,
        },
      });
      if (dbres) {
        return dbres;
      } else {
        throw new Error("Product not deleted");
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.log(error);
      }
      throw error;
    }
  }

  async create(data: Prisma.MoviesCreateInput) {
    try {
      await this.prismaService.movies.create({
        data: data,
      });
      return defaultResponse({
        message: "Movie created successfully",
        status: HttpStatus.CREATED,
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.log(error);
        /* if (error.code === SpecificCode) {
              throwToFieldError("Error Message", ["Error Field"]);
            } */
      }
      throw error;
    }
  }

  async getAllPoster(): Promise<z.infer<typeof MoviePosterSchema>[]> {
    const movies = await this.prismaService.movies.findMany({
      select: {
        backdrop: true,
        genre: true,
        id: true,
        poster: true,
        title: true,
        vote_average: true,
      },
    });
    return movies;
  }
  async getAll(page: number = 1) {
    const movies = await this.prismaService.movies.findMany({
      skip: (page - 1) * 10,
      take: 10,
      orderBy: {
        id: "desc",
      },
    });

    return Promise.all(
      movies.map(async (prod) => ({
        ...prod,
      })),
    );
  }
  async search(search: string) {
    const movies = await this.prismaService.movies.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            original_title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            subtitle: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            synopsis: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    if (!movies) {
      throw new Error("No movies found");
    }
    if (movies.length === 0) {
      return movies;
    }
    return Promise.all(
      movies.map(async (prod) => ({
        ...prod,
      })),
    );
  }

  async searchPosters(search: string) {
    const movies = await this.prismaService.movies.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            original_title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            subtitle: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            synopsis: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
      select: {
        backdrop: true,
        genre: true,
        id: true,
        poster: true,
        title: true,
        vote_average: true,
      },
    });
    if (!movies) {
      throw new Error("No movies found");
    }
    if (movies.length === 0) {
      return movies;
    }
    return Promise.all(
      movies.map(async (prod) => ({
        ...prod,
      })),
    );
  }

  async getPageTotal() {
    const movies = await this.prismaService.movies.findMany();
    const total = movies.length;
    const pageTotal = Math.ceil(total / 10);
    return pageTotal;
  }

  async get(id: number) {
    const movie = await this.prismaService.movies.findUnique({
      where: {
        id,
      },
    });

    return movie;
  }

  async exists(id: number) {
    const movie = await this.prismaService.movies.findUnique({
      where: {
        id,
      },
    });

    return !!movie;
  }

  async existsByName(name: string) {
    const movie = await this.prismaService.movies.findFirst({
      where: {
        title: {
          contains: name,
          mode: "insensitive",
        },
      },
    });

    return !!movie;
  }
}
