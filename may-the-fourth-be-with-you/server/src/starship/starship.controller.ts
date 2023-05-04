import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StarshipService } from "./starship.service";
import { StarshipControllerBase } from "./base/starship.controller.base";

@swagger.ApiTags("starships")
@common.Controller("starships")
export class StarshipController extends StarshipControllerBase {
  constructor(protected readonly service: StarshipService) {
    super(service);
  }
}
