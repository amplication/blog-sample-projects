import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TypingService } from "./typing.service";
import { TypingControllerBase } from "./base/typing.controller.base";

@swagger.ApiTags("typings")
@common.Controller("typings")
export class TypingController extends TypingControllerBase {
  constructor(
    protected readonly service: TypingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
