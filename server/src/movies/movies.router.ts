import { Inject } from "@nestjs/common";
import { Input, Mutation, Router, UseMiddlewares } from "nestjs-trpc";

import { AuthMiddleware } from "src/auth/auth.middleware";

import { z } from "zod";

import {
  MoviePosterSchema,
  MoviesCreateInputSchema,
  MoviesSchema,
} from "./dto";
import { MoviesService } from "./movies.service";

@Router({ alias: "movies" })
export class MoviesRouter {
  constructor(
    @Inject(MoviesService) private readonly moviesService: MoviesService,
  ) {}

  @UseMiddlewares(AuthMiddleware)
  @Mutation({ output: z.array(MoviePosterSchema) })
  async getPosters() {
    return this.moviesService.getAllPoster();
  }
  @UseMiddlewares(AuthMiddleware)
  @Mutation({ input: z.number().optional(), output: z.array(MoviesSchema) })
  async getAll(@Input() page?: number) {
    return this.moviesService.getAll(page);
  }
  @UseMiddlewares(AuthMiddleware)
  @Mutation({ input: z.string(), output: z.array(MoviesSchema) })
  async search(@Input() search: string) {
    return this.moviesService.search(search);
  }
  @UseMiddlewares(AuthMiddleware)
  @Mutation({ input: z.string(), output: z.array(MoviePosterSchema) })
  async searchPosters(@Input() search: string) {
    return this.moviesService.searchPosters(search);
  }

  @UseMiddlewares(AuthMiddleware)
  @Mutation({ input: z.number(), output: MoviesSchema })
  async get(@Input() id: number) {
    return this.moviesService.get(id);
  }
  @UseMiddlewares(AuthMiddleware)
  @Mutation({ input: z.number(), output: MoviesSchema })
  async delete(@Input() id: number) {
    return this.moviesService.delete(id);
  }
  @UseMiddlewares(AuthMiddleware)
  @Mutation({ input: z.string(), output: z.boolean() })
  async existsByName(@Input() name: string) {
    return this.moviesService.existsByName(name);
  }
  @UseMiddlewares(AuthMiddleware)
  @Mutation({ input: z.number(), output: z.boolean() })
  async exists(@Input() id: number) {
    return this.moviesService.exists(id);
  }
  @UseMiddlewares(AuthMiddleware)
  @Mutation({ output: z.number() })
  async getPageTotal() {
    return this.moviesService.getPageTotal();
  }
  @UseMiddlewares(AuthMiddleware)
  @Mutation({
    input: MoviesCreateInputSchema,
    output: z.object({
      status: z.number(),
      message: z.string(),
    }),
  })
  async create(@Input() input: z.infer<typeof MoviesCreateInputSchema>) {
    return this.moviesService.create(input);
  }
}
