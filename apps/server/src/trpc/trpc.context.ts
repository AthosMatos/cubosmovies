import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ContextOptions, TRPCContext } from "nestjs-trpc";

@Injectable()
export class AppContext implements TRPCContext {
  constructor(private readonly jwtService: JwtService) {}
  async create(opts: ContextOptions): Promise<Record<string, unknown>> {
    const token = opts.req.headers.bearer;

    let user: object | null = null;

    if (token) {
      try {
        user = await this.jwtService.verifyAsync(token);
      } catch {
        // You can choose to ignore, throw here, or handle it in a middleware
      }
    }

    return {
      req: opts.req,
      res: opts.res,
      user,
      jwtService: this.jwtService,
    };
  }
}
