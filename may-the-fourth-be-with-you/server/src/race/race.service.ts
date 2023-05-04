import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RaceServiceBase } from "./base/race.service.base";

@Injectable()
export class RaceService extends RaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
