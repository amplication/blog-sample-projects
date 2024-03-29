/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Film,
  Person,
  Planet,
  Race,
  Starship,
  Vehicle,
} from "@prisma/client";

export class FilmServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FilmFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FilmFindManyArgs>
  ): Promise<number> {
    return this.prisma.film.count(args);
  }

  async findMany<T extends Prisma.FilmFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FilmFindManyArgs>
  ): Promise<Film[]> {
    return this.prisma.film.findMany(args);
  }
  async findOne<T extends Prisma.FilmFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FilmFindUniqueArgs>
  ): Promise<Film | null> {
    return this.prisma.film.findUnique(args);
  }
  async create<T extends Prisma.FilmCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FilmCreateArgs>
  ): Promise<Film> {
    return this.prisma.film.create<T>(args);
  }
  async update<T extends Prisma.FilmUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FilmUpdateArgs>
  ): Promise<Film> {
    return this.prisma.film.update<T>(args);
  }
  async delete<T extends Prisma.FilmDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FilmDeleteArgs>
  ): Promise<Film> {
    return this.prisma.film.delete(args);
  }

  async findPerson(
    parentId: string,
    args: Prisma.PersonFindManyArgs
  ): Promise<Person[]> {
    return this.prisma.film
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .person(args);
  }

  async findPlanet(
    parentId: string,
    args: Prisma.PlanetFindManyArgs
  ): Promise<Planet[]> {
    return this.prisma.film
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .planet(args);
  }

  async findRace(
    parentId: string,
    args: Prisma.RaceFindManyArgs
  ): Promise<Race[]> {
    return this.prisma.film
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .race(args);
  }

  async findStarship(
    parentId: string,
    args: Prisma.StarshipFindManyArgs
  ): Promise<Starship[]> {
    return this.prisma.film
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .starship(args);
  }

  async findVehicle(
    parentId: string,
    args: Prisma.VehicleFindManyArgs
  ): Promise<Vehicle[]> {
    return this.prisma.film
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .vehicle(args);
  }
}
