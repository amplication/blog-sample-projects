import { Module } from "@nestjs/common";
import { PersonModuleBase } from "./base/person.module.base";
import { PersonService } from "./person.service";
import { PersonController } from "./person.controller";
import { PersonResolver } from "./person.resolver";

@Module({
  imports: [PersonModuleBase],
  controllers: [PersonController],
  providers: [PersonService, PersonResolver],
  exports: [PersonService],
})
export class PersonModule {}
