import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

import bcrypt from "bcryptjs";
import ms from "ms";

import { Request } from "express";

import { User } from "@prisma/client";
import { UsersService } from "src/users/users.service";
import { throwToFieldError } from "../utils/error-handler.utils";
import { VerifyUserReq } from "./dto/verify-user.req";
import { TokenPayload } from "./token-payload.interface";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async validatePassword(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword);
  }

  async verifyUser(body: VerifyUserReq) {
    try {
      const user = await this.userService.get({
        email: body.email,
        //name: body.name,
      });

      const isPasswordValid = await this.validatePassword(
        body.password,
        user.password,
      );
      if (!isPasswordValid) {
        throwToFieldError("Senha inválida.", ["password"]);
      }
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          throwToFieldError("Usuário não encontrado.", ["email"]);
        }
      }
      throw error;
    }
  }

  async login(user: User) {
    const expires = new Date();
    expires.setMilliseconds(
      expires.getMilliseconds() +
        parseInt(
          ms(this.configService.getOrThrow<string>("JWT_EXPIRES_IN") as any),
        ),
    );

    const TokenPayload: TokenPayload = {
      userId: user.id,
    };

    const token = this.jwtService.sign(TokenPayload);

    return { token };
  }

  async getSessionCookies({ req }: { req: Request }) {
    const token = req.cookies?.Authentication;
    if (!token) {
      return null;
    }

    try {
      const payload = this.jwtService.verify<TokenPayload>(token, {
        secret: this.configService.getOrThrow<string>("JWT_SECRET"),
      });
      return payload.userId;
    } catch (error) {
      return null;
    }
  }

  async getSessionBearer({ req }: { req: Request }) {
    const token = req.headers.bearer?.toString();
    if (!token) {
      return null;
    }

    try {
      const payload = this.jwtService.verify<TokenPayload>(token, {
        secret: this.configService.getOrThrow<string>("JWT_SECRET"),
      });
      return payload.userId;
    } catch (error) {
      return null;
    }
  }
}
