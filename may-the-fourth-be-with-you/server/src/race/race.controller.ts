import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RaceService } from "./race.service";
import { RaceControllerBase } from "./base/race.controller.base";

@swagger.ApiTags("races")
@common.Controller("races")
export class RaceController extends RaceControllerBase {
  constructor(protected readonly service: RaceService) {
    super(service);
  }
}
