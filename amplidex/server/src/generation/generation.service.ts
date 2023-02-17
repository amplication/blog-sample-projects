import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GenerationServiceBase } from "./base/generation.service.base";

@Injectable()
export class GenerationService extends GenerationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
