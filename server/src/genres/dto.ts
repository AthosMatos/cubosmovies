import { z } from "zod";

export const MovieGenreSchema = z.object({
  id: z.number().optional(), // optional if auto-generated
  name: z.string(),
});
export const CreateMovieGenreSchema = z.object({
  name: z.string(),
});

export const checkIfExistsSchema = z.array(z.string());
