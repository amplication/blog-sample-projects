import { Module } from "@nestjs/common";
import { RaceModuleBase } from "./base/race.module.base";
import { RaceService } from "./race.service";
import { RaceController } from "./race.controller";
import { RaceResolver } from "./race.resolver";

@Module({
  imports: [RaceModuleBase],
  controllers: [RaceController],
  providers: [RaceService, RaceResolver],
  exports: [RaceService],
})
export class RaceModule {}
