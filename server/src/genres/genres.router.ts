import { Inject } from "@nestjs/common";
import { Input, Mutation, Query, Router, UseMiddlewares } from "nestjs-trpc";

import { AuthMiddleware } from "src/auth/auth.middleware";
import { z } from "zod";
import { checkIfExistsSchema, MovieGenreSchema } from "./dto";
import { GenresService } from "./genres.service";

@Router({ alias: "genres" })
@UseMiddlewares(AuthMiddleware)
export class GenresRouter {
  constructor(
    @Inject(GenresService) private readonly genresService: GenresService,
  ) {}

  @Query({ output: z.array(MovieGenreSchema) })
  async getAll() {
    return this.genresService.getAll();
  }

  @Mutation({
    input: checkIfExistsSchema,
    output: z.array(MovieGenreSchema),
  })
  async checkIfExists(@Input() input: z.infer<typeof checkIfExistsSchema>) {
    return this.genresService.checkIfExist(input);
  }
}
