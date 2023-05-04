import { JsonValue } from "type-fest";
import { Film } from "../film/Film";
import { Person } from "../person/Person";

export type Race = {
  averageHeight: number | null;
  averageLifespan: number | null;
  classification: string | null;
  createdAt: Date;
  description: string | null;
  designtation: string | null;
  eyeColors: JsonValue;
  films?: Array<Film>;
  hairColors: JsonValue;
  id: string;
  language: string | null;
  name: string | null;
  people?: Array<Person>;
  skinColors: JsonValue;
  updatedAt: Date;
};
