import { Inject, Injectable } from "@nestjs/common";
import { TRPCError } from "@trpc/server";
import type { ContextOptions } from "nestjs-trpc";
import {
  MiddlewareOptions,
  MiddlewareResponse,
  TRPCMiddleware,
} from "nestjs-trpc";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthMiddleware implements TRPCMiddleware {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}
  async use(
    opts: MiddlewareOptions<ContextOptions>,
  ): Promise<MiddlewareResponse> {
    const {
      next,
      ctx: { req },
    } = opts;
    const userId = await this.authService.getSessionBearer({ req });

    if (userId == null) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You are not logged in.",
      });
    }

    return next({
      ctx: {
        auth: {
          userId: userId,
        },
      },
    });
  }
}
