import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MonsterResolverBase } from "./base/monster.resolver.base";
import { Monster } from "./base/Monster";
import { MonsterService } from "./monster.service";

@graphql.Resolver(() => Monster)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MonsterResolver extends MonsterResolverBase {
  constructor(
    protected readonly service: MonsterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
