import { Inject } from "@nestjs/common";
import { Input, Mutation, Query, Router, UseMiddlewares } from "nestjs-trpc";
import { AuthMiddleware } from "src/auth/auth.middleware";
import { z } from "zod";
import {
  passUpdateWithEmailSchema,
  userCreateSchema,
  userDeleteSchema,
  userGetSchema,
  userSchema,
  userUpdateSchema,
} from "./dto";
import { UsersService } from "./users.service";

@Router({ alias: "users" })
@UseMiddlewares(AuthMiddleware)
export class UsersRouter {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
  ) {}

  @Query({ output: z.array(userSchema) })
  async getAll() {
    return this.usersService.getAll();
  }

  @Query({ input: userGetSchema, output: userSchema })
  async get(@Input() input: z.infer<typeof userGetSchema>) {
    return this.usersService.get(input);
  }

  @Mutation({
    input: userCreateSchema,
    output: z.object({
      status: z.number(),
      message: z.string(),
    }),
  })
  async create(@Input() input: z.infer<typeof userCreateSchema>) {
    return this.usersService.create(input);
  }

  @Mutation({ input: userUpdateSchema, output: userSchema })
  async update(@Input() input: z.infer<typeof userUpdateSchema>) {
    return this.usersService.update(input);
  }

  @Mutation({ input: passUpdateWithEmailSchema, output: userSchema })
  async updatePassWithEmail(
    @Input() input: z.infer<typeof passUpdateWithEmailSchema>,
  ) {
    return this.usersService.updatePassFromEmail(input);
  }

  @Mutation({ input: userDeleteSchema, output: userSchema })
  async delete(@Input() input: z.infer<typeof userDeleteSchema>) {
    return this.usersService.delete(input);
  }
}
