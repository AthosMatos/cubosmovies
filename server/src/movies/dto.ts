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

export const ResponseSchema = z.object({
  status: z.number(),
  message: z.string(),
  body: z.any(),
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

export const MoviesUpdateSchema = z.object({
  title: z.string().optional(),
  original_title: z.string().optional(),
  subtitle: z.string().optional(),
  synopsis: z.string().optional(),
  genre: z
    .object({
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
    })
    .optional(),
  popularity: z.number().optional(),
  vote_average: z.number().optional(),
  vote_count: z.number().optional(),
  release_date: z.coerce.date().optional(),
  duration: z.number().optional(),
  situation: z.string().optional(),
  language: z.string().optional(),
  budget: z.number().optional(),
  revenue: z.number().optional(),
  profit: z.number().optional(),
  poster: z.string().optional(),
  backdrop: z.string().optional(),
  trailer: z.string().optional(),
});

export const MoviesUpdateInputSchema = z.object({
  id: z.number(),
  data: MoviesUpdateSchema,
});

export const GetAllMoviesSchema = z.object({
  page: z.number().optional(),

  DurationMin: z.preprocess((val) => {
    const num = Number(val);
    return isNaN(num) ? undefined : num;
  }, z.number().optional()),

  DurationMax: z.preprocess((val) => {
    const num = Number(val);
    return isNaN(num) ? undefined : num;
  }, z.number().optional()),

  DateMin: z.preprocess((val: any) => {
    if (!val) return undefined;
    const date = new Date(val);
    return isNaN(date.getTime()) ? undefined : date;
  }, z.date().optional()),

  DateMax: z.preprocess((val: any) => {
    if (!val) return undefined;
    const date = new Date(val);
    return isNaN(date.getTime()) ? undefined : date;
  }, z.date().optional()),

  Genres: z.array(z.number()).optional(),
});

export const GetMovieSchema = z.number();
export const GetMovieByNameSchema = z.string();

export const ExistsMovieSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
});
