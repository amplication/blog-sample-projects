import { Module } from "@nestjs/common";
import { StarshipModuleBase } from "./base/starship.module.base";
import { StarshipService } from "./starship.service";
import { StarshipController } from "./starship.controller";
import { StarshipResolver } from "./starship.resolver";

@Module({
  imports: [StarshipModuleBase],
  controllers: [StarshipController],
  providers: [StarshipService, StarshipResolver],
  exports: [StarshipService],
})
export class StarshipModule {}
