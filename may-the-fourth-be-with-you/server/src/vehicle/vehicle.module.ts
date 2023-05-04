import { Module } from "@nestjs/common";
import { VehicleModuleBase } from "./base/vehicle.module.base";
import { VehicleService } from "./vehicle.service";
import { VehicleController } from "./vehicle.controller";
import { VehicleResolver } from "./vehicle.resolver";

@Module({
  imports: [VehicleModuleBase],
  controllers: [VehicleController],
  providers: [VehicleService, VehicleResolver],
  exports: [VehicleService],
})
export class VehicleModule {}
