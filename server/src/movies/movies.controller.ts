import {
  Controller,
  FileTypeValidator,
  Param,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

import { UseMiddlewares } from "nestjs-trpc";
import { AuthMiddleware } from "src/auth/auth.middleware";
import { MoviesService } from "./movies.service";

@Controller("movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post(":movieId/poster")
  @UseMiddlewares(AuthMiddleware)
  @UseInterceptors(FileInterceptor("poster"))
  uploadPoster(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: "image" })],
      }),
    )
    file: Express.Multer.File,
    @Param("movieId") movieId: string,
  ) {
    return this.moviesService.uploadPoster(parseInt(movieId), file.buffer);
  }

  @Post(":movieId/backdrop")
  @UseMiddlewares(AuthMiddleware)
  @UseInterceptors(FileInterceptor("backdrop"))
  uploadBackdrop(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: "image" })],
      }),
    )
    file: Express.Multer.File,
    @Param("movieId") movieId: string,
  ) {
    return this.moviesService.uploadBackdrop(parseInt(movieId), file.buffer);
  }
}
