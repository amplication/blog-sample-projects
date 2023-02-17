import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MonsterService } from "./monster.service";
import { MonsterControllerBase } from "./base/monster.controller.base";

@swagger.ApiTags("monsters")
@common.Controller("monsters")
export class MonsterController extends MonsterControllerBase {
  constructor(
    protected readonly service: MonsterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
