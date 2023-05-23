import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SealServiceBase } from "./base/seal.service.base";

@Injectable()
export class SealService extends SealServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
