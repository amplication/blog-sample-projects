import { Film } from "../film/Film";
import { JsonValue } from "type-fest";
import { Person } from "../person/Person";

export type Vehicle = {
  cargoCapacity: number | null;
  consumables: string | null;
  costInCredits: number | null;
  createdAt: Date;
  crew: string | null;
  description: string | null;
  films?: Array<Film>;
  id: string;
  length: number | null;
  manufacturer: JsonValue;
  maxAtmoshpheringSpeed: number | null;
  model: string | null;
  name: string | null;
  passengers: string | null;
  people?: Array<Person>;
  updatedAt: Date;
  vehicleClass: string | null;
};
