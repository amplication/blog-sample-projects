import { Module } from "@nestjs/common";
import { PlanetModuleBase } from "./base/planet.module.base";
import { PlanetService } from "./planet.service";
import { PlanetController } from "./planet.controller";
import { PlanetResolver } from "./planet.resolver";

@Module({
  imports: [PlanetModuleBase],
  controllers: [PlanetController],
  providers: [PlanetService, PlanetResolver],
  exports: [PlanetService],
})
export class PlanetModule {}
