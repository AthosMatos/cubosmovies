import { z } from "zod";

export const MoviesSchema = z.object({
  id: z.number(),
  title: z.string(),
  original_title: z.string(),
  subtitle: z.string(),
  synopsis: z.string(),
  popularity: z.number(),
  vote_average: z.number(),
  vote_count: z.number(),
  release_date: z.date().or(z.string()),
  duration: z.number(),
  situation: z.string(),
  language: z.string(),
  budget: z.number(),
  revenue: z.number(),
  profit: z.number(),
  poster: z.string(),
  backdrop: z.string(),
  trailer: z.string(),
  genre: z
    .array(
      z.object({
        id: z.number(),
        name: z.string(),
      }),
    )
    .optional(),
});
export const MoviesCreateInputSchema = z.object({
  id: z.number().optional(),
  title: z.string(),
  original_title: z.string(),
  subtitle: z.string(),
  synopsis: z.string(),
  genre: z.object({
    connect: z.array(
      z.object({
        id: z.number(),
      }),
    ),
    create: z.array(
      z.object({
        name: z.string(),
      }),
    ),
  }),
  popularity: z.number(),
  vote_average: z.number(),
  vote_count: z.number(),
  release_date: z.coerce.date(),
  duration: z.number(),
  situation: z.string(),
  language: z.string(),
  budget: z.number(),
  revenue: z.number(),
  profit: z.number(),
  poster: z.string(),
  backdrop: z.string(),
  trailer: z.string(),
});

/* 
{
    id: number;
    title: string;
    vote_average: number;
    poster: string;
    backdrop: string;
    genre: {
        id: number;
        name: string;
    }[];
}
*/

export const MoviePosterSchema = z.object({
  id: z.number(),
  title: z.string(),
  poster: z.string(),
  backdrop: z.string(),
  vote_average: z.number(),
  genre: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
});
