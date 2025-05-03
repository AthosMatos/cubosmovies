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
    updatePassWithEmail: publicProcedure.input(z.object({
      email: z.string(),
      password: z.string(),
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
  movies: t.router({
    getPosters: publicProcedure.output(z.array(z.object({
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
    }))).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getAll: publicProcedure.input(z.number().optional()).output(z.array(z.object({
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
    }))).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    search: publicProcedure.input(z.string()).output(z.array(z.object({
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
    }))).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    searchPosters: publicProcedure.input(z.string()).output(z.array(z.object({
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
    }))).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    get: publicProcedure.input(z.number()).output(z.object({
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
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    delete: publicProcedure.input(z.number()).output(z.object({
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
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    existsByName: publicProcedure.input(z.string()).output(z.boolean()).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    exists: publicProcedure.input(z.number()).output(z.boolean()).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getPageTotal: publicProcedure.output(z.number()).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    create: publicProcedure.input(z.object({
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
    })).output(z.object({
      status: z.number(),
      message: z.string(),
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
  }),
  genres: t.router({
    checkIfExists: publicProcedure.input(z.array(z.string())).output(z.array(z.object({
      id: z.number().optional(), // optional if auto-generated
      name: z.string(),
    }))).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

