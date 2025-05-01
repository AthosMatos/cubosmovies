import { Injectable, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import fs from "fs";
import { Prisma } from "generated/prisma";
import { join } from "path";
import { PrismaService } from "../prisma/prisma.service";
import { normalizeString } from "../utils/format.utils";

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
      const dbres = await this.prismaService.movies.create({
        data,
      });
      if (dbres) {
        return dbres;
      } else {
        throw new Error("Product not created");
      }
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

  async getAll({ withGenre = false }: { withGenre?: boolean }) {
    const prods = await this.prismaService.movies.findMany({
      include: {
        genre: withGenre,
      },
    });
    return Promise.all(
      prods.map(async (prod) => ({
        ...prod,
        images: await this.images(prod.id.toString()),
      })),
    );
  }

  async images(movieId: string) {
    try {
      const path = join(__dirname.split("\\dist")[0], `public/images/movies/`);

      //check if the files inside the folder have the id bedore the first '-' as the movie id
      const readfiles = fs.readdirSync(path);

      const files = readfiles.filter((file) => {
        return file.split("-")[0] === movieId;
      });
      if (files.length === 0) {
        return [];
      }
      return files.map(
        (file) =>
          `http://${this.configService.getOrThrow("BASE_URL")}:${this.configService.getOrThrow("PORT")}/images/movies/${file}`,
      );
    } catch (error) {
      return [];
    }
  }

  private async getImages(imagesNames: string[]) {
    try {
      const path = join(__dirname.split("\\dist")[0], `public/images/movies/`);

      //check if the files inside the folder have the id bedore the first '-' as the movie id
      const readfiles = fs.readdirSync(path);
      const normalizedImages = imagesNames.map((img) => normalizeString(img));

      const files = readfiles.filter((file) => {
        return normalizedImages.includes(
          normalizeString(file.split("-").slice(1).join("-")),
        );
      });
      if (files.length === 0) {
        return [];
      }
      return files.map(
        (file) =>
          `http://${this.configService.getOrThrow("BASE_URL")}:${this.configService.getOrThrow("PORT")}/images/movies/${file}`,
      );
    } catch (error) {
      return [];
    }
  }

  async getById({
    id,
    withGenre = false,
  }: {
    id?: number;
    withGenre?: boolean;
  }) {
    try {
      const prod = await this.prismaService.movies.findUniqueOrThrow({
        where: {
          id,
        },
        include: {
          genre: withGenre,
        },
      });
      return {
        ...prod,
        images: await this.images(prod.id.toString()),
      };
    } catch (error) {
      throw new NotFoundException("Product not found");
    }
  }
}
