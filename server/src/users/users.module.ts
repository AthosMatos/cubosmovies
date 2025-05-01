import { Module } from "@nestjs/common";

import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { AuthMiddleware } from "src/auth/auth.middleware";
import { AuthService } from "src/auth/auth.service";
import { PrismaModule } from "../prisma/prisma.module";
import { UsersRouter } from "./users.router";
import { UsersService } from "./users.service";

@Module({
  imports: [PrismaModule],
  providers: [
    UsersRouter,
    UsersService,
    AuthService,
    JwtService,
    AuthMiddleware,
    ConfigService,
  ],
})
export class UsersModule {}
