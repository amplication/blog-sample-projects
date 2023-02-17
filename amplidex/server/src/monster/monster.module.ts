import { Module } from "@nestjs/common";
import { MonsterModuleBase } from "./base/monster.module.base";
import { MonsterService } from "./monster.service";
import { MonsterController } from "./monster.controller";
import { MonsterResolver } from "./monster.resolver";

@Module({
  imports: [MonsterModuleBase],
  controllers: [MonsterController],
  providers: [MonsterService, MonsterResolver],
  exports: [MonsterService],
})
export class MonsterModule {}
