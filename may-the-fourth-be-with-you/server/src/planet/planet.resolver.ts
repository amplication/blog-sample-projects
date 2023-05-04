import * as graphql from "@nestjs/graphql";
import { PlanetResolverBase } from "./base/planet.resolver.base";
import { Planet } from "./base/Planet";
import { PlanetService } from "./planet.service";

@graphql.Resolver(() => Planet)
export class PlanetResolver extends PlanetResolverBase {
  constructor(protected readonly service: PlanetService) {
    super(service);
  }
}
