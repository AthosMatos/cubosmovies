import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  users: t.router({
    getAll: publicProcedure.output(z.array(z.object({
      id: z.number(),
      email: z.string(),
      name: z.string().optional(),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    get: publicProcedure.input(z.object({
      id: z.number(),
    })).output(z.object({
      id: z.number(),
      email: z.string(),
      name: z.string().optional(),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    create: publicProcedure.input(z.object({
      email: z.string(),
      name: z.string(),
      password: z.string(),
    })).output(z.object({
      status: z.number(),
      message: z.string(),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    update: publicProcedure.input(z.object({
      id: z.number(),
      email: z.string().optional(),
      name: z.string().optional(),
      password: z.string().optional(),
    })).output(z.object({
      id: z.number(),
      email: z.string(),
      name: z.string().optional(),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    delete: publicProcedure.input(z.object({
      id: z.number(),
    })).output(z.object({
      id: z.number(),
      email: z.string(),
      name: z.string().optional(),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  }),
  auth: t.router({
    login: publicProcedure.input(z.object({
      email: z.string().min(1, { message: "Email is required" }).email({
        message: "Email is not valid",
      }),
      password: z.string().min(1, {
        message: "Password is required",
      }),
    })).output(z.object({
      token: z.string(),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

