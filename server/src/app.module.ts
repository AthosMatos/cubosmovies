import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { AuthModule } from "./auth/auth.module";
import { MoviesModule } from "./movies/movies.module";
import { TrpcModule } from "./trpc/trpc.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname.split("\\dist")[0], "public"),
      renderPath: "/public",
    }),
    ConfigModule.forRoot(),
    TrpcModule,
    UsersModule,
    MoviesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
