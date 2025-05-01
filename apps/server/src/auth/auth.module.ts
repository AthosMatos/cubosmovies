import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersModule } from "src/users/users.module";
import { UsersService } from "src/users/users.service";
import { AuthMiddleware } from "./auth.middleware";
import { AuthRouter } from "./auth.router";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
  imports: [
    UsersModule,
    ConfigModule,
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      useFactory: (ConfigService: ConfigService) => ({
        secret: ConfigService.getOrThrow("JWT_SECRET"),
        signOptions: { expiresIn: ConfigService.getOrThrow("JWT_EXPIRES_IN") },
      }),
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    AuthRouter,
    UsersService,
    PrismaService,
    AuthMiddleware,
  ],
  exports: [AuthService, AuthMiddleware],
})
export class AuthModule {}
