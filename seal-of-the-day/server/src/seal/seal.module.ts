import { Module } from "@nestjs/common";
import { SealModuleBase } from "./base/seal.module.base";
import { SealService } from "./seal.service";

@Module({
  imports: [SealModuleBase],
  providers: [SealService],
  exports: [SealService],
})
export class SealModule {}
