import { JsonValue } from "type-fest";
import { Film } from "../film/Film";
import { Person } from "../person/Person";

export type Planet = {
  climates: JsonValue;
  createdAt: Date;
  description: string | null;
  diameter: number | null;
  films?: Array<Film>;
  gravity: string | null;
  id: string;
  name: string | null;
  orbitalPeriod: number | null;
  people?: Array<Person>;
  population: number | null;
  rotationPeriod: number | null;
  surfaceWater: number | null;
  terrains: JsonValue;
  updatedAt: Date;
};
