import { Module } from "@nestjs/common";
import { GenerationModuleBase } from "./base/generation.module.base";
import { GenerationService } from "./generation.service";
import { GenerationController } from "./generation.controller";
import { GenerationResolver } from "./generation.resolver";

@Module({
  imports: [GenerationModuleBase],
  controllers: [GenerationController],
  providers: [GenerationService, GenerationResolver],
  exports: [GenerationService],
})
export class GenerationModule {}
