import * as graphql from "@nestjs/graphql";
import { PersonResolverBase } from "./base/person.resolver.base";
import { Person } from "./base/Person";
import { PersonService } from "./person.service";

@graphql.Resolver(() => Person)
export class PersonResolver extends PersonResolverBase {
  constructor(protected readonly service: PersonService) {
    super(service);
  }
}
