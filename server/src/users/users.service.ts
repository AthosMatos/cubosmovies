import { HttpStatus, Injectable } from "@nestjs/common";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";
import { Prisma } from "generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";
import { throwToFieldError } from "src/utils/error-handler.utils";
import { defaultResponse } from "src/utils/response.utils";
import { z } from "zod";
import { userCreateSchema, userUpdateSchema } from "./schemas";

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    try {
      return await this.prismaService.user.findMany({
        select: {
          id: true,
          email: true,
          name: true,
        },
      });
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error;
      }
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "An error occurred while fetching users.",
        cause: error,
      });
    }
  }

  async get(input: Prisma.UserWhereUniqueInput) {
    try {
      return await this.prismaService.user.findUniqueOrThrow({
        where: input,
      });
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error;
      }
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found.",
        cause: error,
      });
    }
  }

  async create(input: z.infer<typeof userCreateSchema>) {
    try {
      await this.prismaService.user.create({
        data: {
          ...input,
          password: await bcrypt.hash(input.password, 10),
        },
      });

      return defaultResponse({
        message: "User created successfully.",
        status: HttpStatus.CREATED,
      });
    } catch (error) {
      if (error?.code === "P2002") {
        throwToFieldError("Email already in use.", ["email"]);
      }
      throw error;
    }
  }

  async update(input: z.infer<typeof userUpdateSchema>) {
    try {
      return await this.prismaService.user.update({
        where: {
          id: input.id,
        },
        data: {
          ...input,
          password: input.password
            ? await bcrypt.hash(input.password, 10)
            : undefined,
        },
      });
    } catch (error) {
      if (error.code === "P2002") {
        throwToFieldError("Email already in use.", ["email"]);
      }
      throw error;
    }
  }

  async delete(input: Prisma.UserWhereUniqueInput) {
    try {
      return await this.prismaService.user.delete({
        where: {
          id: input.id,
        },
      });
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error;
      }
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found.",
        cause: error,
      });
    }
  }
}
