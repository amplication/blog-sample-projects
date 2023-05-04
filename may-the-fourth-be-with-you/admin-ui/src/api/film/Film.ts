import { Person } from "../person/Person";
import { Planet } from "../planet/Planet";
import { JsonValue } from "type-fest";
import { Race } from "../race/Race";
import { Starship } from "../starship/Starship";
import { Vehicle } from "../vehicle/Vehicle";

export type Film = {
  createdAt: Date;
  description: string | null;
  director: string | null;
  episodeId: number | null;
  id: string;
  openingCrawl: string | null;
  people?: Array<Person>;
  planets?: Array<Planet>;
  producers: JsonValue;
  races?: Array<Race>;
  releaseDate: Date | null;
  starships?: Starship | null;
  title: string | null;
  updatedAt: Date;
  vehicle?: Vehicle | null;
};
