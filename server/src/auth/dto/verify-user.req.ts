import { z } from "zod";

export interface VerifyUserReq {
  email?: string;
  name?: string;
  password: string;
}

export const VerifyUserReqZodPassword = z.string().min(1, {
  message: "Password is required",
});

export const VerifyUserReqZod = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Email is not valid",
  }),
  password: VerifyUserReqZodPassword,
});
