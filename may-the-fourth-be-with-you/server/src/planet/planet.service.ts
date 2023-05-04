import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlanetServiceBase } from "./base/planet.service.base";

@Injectable()
export class PlanetService extends PlanetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
