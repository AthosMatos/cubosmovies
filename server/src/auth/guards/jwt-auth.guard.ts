import { UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export class JwtAuthGuard extends AuthGuard("jwt") {
  handleRequest(err: any, user: any, info: any, context: any) {
    // If there is an error or no user is found, throw a custom exception
    if (err || !user) {
      throw new UnauthorizedException({
        message:
          "Custom error: You are not authorized to access this resource.",
      });
    }
    return user;
  }
}
