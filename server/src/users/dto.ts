import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  email: z.string(),
  name: z.string().optional(),
});

const userCreateSchema = z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
});

const userUpdateSchema = z.object({
  id: z.number(),
  email: z.string().optional(),
  name: z.string().optional(),
  password: z.string().optional(),
});

const passUpdateWithEmailSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const userDeleteSchema = z.object({
  id: z.number(),
});

const userGetSchema = z.object({
  id: z.number(),
});

export {
  passUpdateWithEmailSchema,
  userCreateSchema,
  userDeleteSchema,
  userGetSchema,
  userSchema,
  userUpdateSchema,
};
