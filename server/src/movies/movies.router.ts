import { Inject } from "@nestjs/common";
import { Input, Mutation, Query, Router, UseMiddlewares } from "nestjs-trpc";

import { AuthMiddleware } from "src/auth/auth.middleware";

import { z } from "zod";

import {
  ExistsMovieSchema,
  GetAllMoviesSchema,
  GetMovieSchema,
  MoviesCreateInputSchema,
  MoviesSchema,
  MoviesUpdateInputSchema,
  ResponseSchema,
} from "./dto";
import { MoviesService } from "./movies.service";

@Router({ alias: "movies" })
@UseMiddlewares(AuthMiddleware)
export class MoviesRouter {
  constructor(
    @Inject(MoviesService) private readonly moviesService: MoviesService,
  ) {}

  // ─── QUERIES ────────────────────────────────────────────

  @Mutation({ input: GetAllMoviesSchema, output: z.array(MoviesSchema) })
  async getAll(@Input() input: z.infer<typeof GetAllMoviesSchema>) {
    return this.moviesService.getAll(input);
  }

  @Mutation({ input: GetMovieSchema, output: MoviesSchema })
  async get(@Input() id: z.infer<typeof GetMovieSchema>) {
    return this.moviesService.get(id);
  }

  @Mutation({ input: z.number(), output: ResponseSchema })
  async getMoviePoster(@Input() id: number) {
    return this.moviesService.getMoviePoster(id);
  }

  @Mutation({ input: z.number(), output: ResponseSchema })
  async getMovieBackdrop(@Input() id: number) {
    return this.moviesService.getMovieBackdrop(id);
  }

  @Mutation({ input: ExistsMovieSchema, output: ResponseSchema })
  async exists(@Input() input: z.infer<typeof ExistsMovieSchema>) {
    return this.moviesService.exists(input);
  }

  @Query({ output: z.number() })
  async getPageTotal() {
    return this.moviesService.getPageTotal();
  }

  // ─── MUTATIONS ────────────────────────────────────────────

  @Mutation({ input: z.string(), output: z.array(MoviesSchema) })
  async search(@Input() search: string) {
    return this.moviesService.search(search);
  }

  @Mutation({ input: z.number(), output: ResponseSchema })
  async delete(@Input() id: number) {
    return this.moviesService.delete(id);
  }

  @Mutation({
    input: MoviesCreateInputSchema,
    output: ResponseSchema,
  })
  async create(@Input() input: z.infer<typeof MoviesCreateInputSchema>) {
    return this.moviesService.create(input);
  }

  @Mutation({
    input: MoviesUpdateInputSchema,
    output: ResponseSchema,
  })
  async update(@Input() input: z.infer<typeof MoviesUpdateInputSchema>) {
    return this.moviesService.update(input);
  }
}
