import { Module } from "@nestjs/common";
import { UserModuleBase } from "./base/user.module.base";
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolver";
import { IsAdminGuard } from "./is-admin.guard";

@Module({
  imports: [UserModuleBase],
  providers: [UserService, UserResolver, IsAdminGuard],
  exports: [UserService],
})
export class UserModule {}
