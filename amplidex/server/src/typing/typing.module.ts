import { Module } from "@nestjs/common";
import { TypingModuleBase } from "./base/typing.module.base";
import { TypingService } from "./typing.service";
import { TypingController } from "./typing.controller";
import { TypingResolver } from "./typing.resolver";

@Module({
  imports: [TypingModuleBase],
  controllers: [TypingController],
  providers: [TypingService, TypingResolver],
  exports: [TypingService],
})
export class TypingModule {}
