import * as graphql from "@nestjs/graphql";
import { FilmResolverBase } from "./base/film.resolver.base";
import { Film } from "./base/Film";
import { FilmService } from "./film.service";

@graphql.Resolver(() => Film)
export class FilmResolver extends FilmResolverBase {
  constructor(protected readonly service: FilmService) {
    super(service);
  }
}
