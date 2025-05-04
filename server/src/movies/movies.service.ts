import { HttpStatus, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { defaultResponse } from "src/utils/response.utils";
import { z } from "zod";
import { PrismaService } from "../prisma/prisma.service";
import { GetAllMoviesSchema, MoviesUpdateInputSchema } from "./dto";

@Injectable()
export class MoviesService {
  constructor(private readonly prismaService: PrismaService) {}

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
      return !!(await this.prismaService.movies.findUnique({ where: { id } }));
    }

    if (name) {
      return !!(await this.prismaService.movies.findFirst({
        where: {
          title: {
            contains: name,
            mode: "insensitive",
          },
        },
      }));
    }

    return false;
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
      await this.prismaService.movies.create({ data });

      return defaultResponse({
        message: "Movie created successfully",
        status: HttpStatus.CREATED,
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
}
