import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlanetService } from "./planet.service";
import { PlanetControllerBase } from "./base/planet.controller.base";

@swagger.ApiTags("planets")
@common.Controller("planets")
export class PlanetController extends PlanetControllerBase {
  constructor(protected readonly service: PlanetService) {
    super(service);
  }
}
