import * as graphql from "@nestjs/graphql";
import { RaceResolverBase } from "./base/race.resolver.base";
import { Race } from "./base/Race";
import { RaceService } from "./race.service";

@graphql.Resolver(() => Race)
export class RaceResolver extends RaceResolverBase {
  constructor(protected readonly service: RaceService) {
    super(service);
  }
}
