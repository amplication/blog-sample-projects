import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VehicleService } from "./vehicle.service";
import { VehicleControllerBase } from "./base/vehicle.controller.base";

@swagger.ApiTags("vehicles")
@common.Controller("vehicles")
export class VehicleController extends VehicleControllerBase {
  constructor(protected readonly service: VehicleService) {
    super(service);
  }
}
