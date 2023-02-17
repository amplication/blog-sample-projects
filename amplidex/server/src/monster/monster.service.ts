import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MonsterServiceBase } from "./base/monster.service.base";

@Injectable()
export class MonsterService extends MonsterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
