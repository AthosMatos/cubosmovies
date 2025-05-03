import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "../prisma/prisma.module";
import { GenresRouter } from "./genres.router";
import { GenresService } from "./genres.service";

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [GenresService, GenresRouter],
})
export class GenresModule {}
