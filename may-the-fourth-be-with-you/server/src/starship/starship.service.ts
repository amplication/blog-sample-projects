import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StarshipServiceBase } from "./base/starship.service.base";

@Injectable()
export class StarshipService extends StarshipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
