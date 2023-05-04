import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FilmService } from "./film.service";
import { FilmControllerBase } from "./base/film.controller.base";

@swagger.ApiTags("films")
@common.Controller("films")
export class FilmController extends FilmControllerBase {
  constructor(protected readonly service: FilmService) {
    super(service);
  }
}
