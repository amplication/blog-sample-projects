import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FilmServiceBase } from "./base/film.service.base";

@Injectable()
export class FilmService extends FilmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
