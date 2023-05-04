import { Film } from "../film/Film";
import { JsonValue } from "type-fest";
import { Person } from "../person/Person";

export type Starship = {
  cargoCapacity: number | null;
  consumables: string | null;
  costInCredits: number | null;
  createdAt: Date;
  crew: string | null;
  description: string | null;
  films?: Array<Film>;
  hyperdriveRating: number | null;
  id: string;
  length: number | null;
  manufacturer: JsonValue;
  maxAtmospheringSpeed: number | null;
  mglt: number | null;
  model: string | null;
  name: string | null;
  passengers: string | null;
  people?: Array<Person>;
  starshipClass: string | null;
  updatedAt: Date;
};
