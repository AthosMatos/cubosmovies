import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class GenresService {
  constructor(private readonly prismaService: PrismaService) {}

  async checkIfExist(genres: string[]) {
    ///check if genres exist in db, if not create them
    const existingGenres = await this.prismaService.movieGenres.findMany({
      where: {
        name: {
          in: genres,
        },
      },
    });
    const existingGenresNames = existingGenres.map((genre) => genre.name);
    const newGenres = genres.filter(
      (genre) => !existingGenresNames.includes(genre),
    );
    await this.prismaService.movieGenres.createMany({
      data: newGenres.map((genre) => ({ name: genre })),
    });

    // Fetch all genres including the newly created ones
    if (newGenres.length > 0) {
      return await this.prismaService.movieGenres.findMany({
        where: {
          name: {
            in: genres,
          },
        },
      });
    }
    return existingGenres;
  }

  async getAll() {
    return this.prismaService.movieGenres.findMany();
  }
}
