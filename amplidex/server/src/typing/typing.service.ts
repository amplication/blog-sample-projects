import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TypingServiceBase } from "./base/typing.service.base";

@Injectable()
export class TypingService extends TypingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
