import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "../prisma/prisma.module";
import { MoviesController } from "./movies.controller";
import { MoviesService } from "./movies.service";

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [MoviesService],
  exports: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
