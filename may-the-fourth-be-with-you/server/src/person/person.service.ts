import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonServiceBase } from "./base/person.service.base";

@Injectable()
export class PersonService extends PersonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
