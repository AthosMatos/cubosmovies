import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TRPCModule } from "nestjs-trpc";
import superjson from "superjson";
import { ZodError } from "zod";
import { TrpcPanelController } from "./trpc-panel.controller";
import { AppContext } from "./trpc.context";
@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: "./src/trpc/@generated",
      transformer: superjson,
      context: AppContext,

      errorFormatter: ({ shape, error }) => {
        const isZodError =
          error.code === "BAD_REQUEST" && error.cause instanceof ZodError;
        const fieldErrors = isZodError ? error.cause.flatten().fieldErrors : {};
        let message = error.message;
        try {
          message = JSON.parse(error?.message)[0]?.message;
        } catch (e) {}

        return {
          ...shape,
          message: message,
          data: {
            code: shape.data.code,
            httpStatus: shape.data.httpStatus,
            path: shape.data.path,
          },
          fieldErrors,
        };
      },
    }),
  ],
  controllers: [TrpcPanelController],
  providers: [AppContext, JwtService],
})
export class TrpcModule {}
