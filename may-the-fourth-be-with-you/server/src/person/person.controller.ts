import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PersonService } from "./person.service";
import { PersonControllerBase } from "./base/person.controller.base";

@swagger.ApiTags("people")
@common.Controller("people")
export class PersonController extends PersonControllerBase {
  constructor(protected readonly service: PersonService) {
    super(service);
  }
}
