import { RequestMethod, ValidationPipe } from "@nestjs/common";
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { HttpExceptionFilter } from "./filters/HttpExceptions.filter";
// @ts-ignore
// eslint-disable-next-line
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as path from "path";

const { PORT = 3000 } = process.env;

async function main() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

  app.setBaseViewsDir(path.join(__dirname, '..', 'src', 'views'));
  app.setViewEngine('hbs');

  app.setGlobalPrefix("api", { exclude: [{ path: '', method: RequestMethod.GET }] });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new HttpExceptionFilter(httpAdapter));

  void app.listen(PORT);

  return app;
}

module.exports = main();
