import * as graphql from "@nestjs/graphql";
import { StarshipResolverBase } from "./base/starship.resolver.base";
import { Starship } from "./base/Starship";
import { StarshipService } from "./starship.service";

@graphql.Resolver(() => Starship)
export class StarshipResolver extends StarshipResolverBase {
  constructor(protected readonly service: StarshipService) {
    super(service);
  }
}
