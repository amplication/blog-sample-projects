import { Module } from "@nestjs/common";
import { UserModuleBase } from "./base/user.module.base";
import { UserService } from "./user.service";

@Module({
  imports: [UserModuleBase],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
