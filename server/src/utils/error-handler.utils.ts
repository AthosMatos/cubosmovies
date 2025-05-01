import { TRPCError } from "@trpc/server";
import { ZodError } from "zod";

export const throwToFieldError = (message: string, fields: string[]) => {
  throw new TRPCError({
    message: message,
    code: "BAD_REQUEST",
    cause: new ZodError([
      {
        code: "custom",
        message: message,
        path: fields,
      },
    ]),
  });
};
