/* import { Injectable } from "@nestjs/common";


import { z } from "zod";
import { MoviesService } from "./movies.service";

@Injectable()
export class MoviesRouter {
  constructor(
    
    private readonly moviesService: MoviesService,
  ) {}

  moviesRouter = this.trpc.router({
    query: {
      getAll: this.trpc.trpc.procedure
        .input(z.object({ withGenre: z.boolean().optional() }))
        .query(async ({ input }) => {
          return await this.moviesService.getAll(input);
        }),
      getById: this.trpc.trpc.procedure
        .input(z.object({ id: z.number(), withGenre: z.boolean().optional() }))
        .query(async ({ input }) => {
          return await this.moviesService.getById(input);
        }),
    },
     mutation: {
      create: this.procedure
        .input(z.object({ name: z.string(), description: z.string() }))
        .mutation(async ({ input }) => {
          return await this.moviesService.create(input);
        }),
      delete: this.procedure
        .input(MoviesDeleteArgsSchema)
        .mutation(async ({ input }) => {
          return await this.moviesService.delete(input);
        }),
    },
  });
}
 */
