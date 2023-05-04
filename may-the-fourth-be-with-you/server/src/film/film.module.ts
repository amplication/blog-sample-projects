import { Module } from "@nestjs/common";
import { FilmModuleBase } from "./base/film.module.base";
import { FilmService } from "./film.service";
import { FilmController } from "./film.controller";
import { FilmResolver } from "./film.resolver";

@Module({
  imports: [FilmModuleBase],
  controllers: [FilmController],
  providers: [FilmService, FilmResolver],
  exports: [FilmService],
})
export class FilmModule {}
