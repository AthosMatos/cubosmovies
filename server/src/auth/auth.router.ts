import { HttpStatus, Inject } from "@nestjs/common";
import { Input, Mutation, Router } from "nestjs-trpc";
import { defaultResponse } from "src/utils/response.utils";
import { z } from "zod";
import { AuthService } from "./auth.service";
import { VerifyUserReqZod } from "./dto/verify-user.req";

@Router({ alias: "auth" })
export class AuthRouter {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Mutation({
    input: VerifyUserReqZod,
    output: z.object({
      token: z.string(),
    }),
  })
  async login(@Input() input: z.infer<typeof VerifyUserReqZod>) {
    const user = await this.authService.verifyUser(input);
    if (!user) {
      return defaultResponse({
        message: "Invalid credentials",
        status: HttpStatus.UNAUTHORIZED,
      });
    }
    return this.authService.login(user);
  }

  // You can uncomment and implement this later if needed
  /* 
  @Mutation({ 
    input: z.object({ email: z.string(), password: z.string() }),
    output: defaultResponseSchema 
  })
  async register(@Input() input: { email: string, password: string }) {
    return await this.authService.register(input);
  }
  */
}
