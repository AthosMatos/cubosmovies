import {
  Controller,
  FileTypeValidator,
  ParseFilePipe,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Controller("movies")
export class MoviesController {
  constructor(private readonly configService: ConfigService) {}

  @Post(":movieId/image")
  @UseGuards()
  @UseInterceptors(
    FilesInterceptor("image", 20, {
      storage: diskStorage({
        destination: `./public/images/movies`,
        filename: (req, file, cb) => {
          const filename = `${req.params.movieId}-${file.originalname}`;

          cb(null, filename);
        },
      }),
    }),
  )
  uploadImage(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          //new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }), // 5MB
          new FileTypeValidator({ fileType: "image" }), // ['image/jpeg', 'image/png'
        ],
      }),
    ) //_file: Express.Multer.File,
    files: Express.Multer.File[],
  ) {
    const createdFilenames = files.map(
      (file) =>
        `http://${this.configService.getOrThrow("BASE_URL")}:${this.configService.getOrThrow("PORT")}/images/movies/${file.filename}`,
    );

    return { filenames: createdFilenames };
  }
}
