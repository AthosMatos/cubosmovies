import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "../prisma/prisma.module";
import { MoviesRouter } from "./movies.router";
import { MoviesService } from "./movies.service";

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [MoviesService, MoviesRouter],
  /* exports: [MoviesService],
  controllers: [MoviesController], */
})
export class MoviesModule {}
