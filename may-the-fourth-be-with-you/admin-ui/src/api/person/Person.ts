import { Film } from "../film/Film";
import { Planet } from "../planet/Planet";
import { Race } from "../race/Race";
import { Starship } from "../starship/Starship";
import { Vehicle } from "../vehicle/Vehicle";

export type Person = {
  birthYear: string | null;
  createdAt: Date;
  description: string | null;
  eyeColor: string | null;
  films?: Array<Film>;
  gender: string | null;
  hairColor: string | null;
  height: number | null;
  id: string;
  mass: number | null;
  name: string | null;
  planet?: Planet | null;
  races?: Array<Race>;
  skinColor: string | null;
  starships?: Array<Starship>;
  updatedAt: Date;
  vehicles?: Array<Vehicle>;
};
