import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VehicleServiceBase } from "./base/vehicle.service.base";

@Injectable()
export class VehicleService extends VehicleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
