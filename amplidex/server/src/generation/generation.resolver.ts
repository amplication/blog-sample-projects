import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GenerationResolverBase } from "./base/generation.resolver.base";
import { Generation } from "./base/Generation";
import { GenerationService } from "./generation.service";

@graphql.Resolver(() => Generation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GenerationResolver extends GenerationResolverBase {
  constructor(
    protected readonly service: GenerationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
