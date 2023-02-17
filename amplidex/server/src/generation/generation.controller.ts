import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GenerationService } from "./generation.service";
import { GenerationControllerBase } from "./base/generation.controller.base";

@swagger.ApiTags("generations")
@common.Controller("generations")
export class GenerationController extends GenerationControllerBase {
  constructor(
    protected readonly service: GenerationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
