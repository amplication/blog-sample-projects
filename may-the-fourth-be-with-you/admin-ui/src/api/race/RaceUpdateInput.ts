import { InputJsonValue } from "../../types";
import { FilmUpdateManyWithoutRacesInput } from "./FilmUpdateManyWithoutRacesInput";
import { PersonUpdateManyWithoutRacesInput } from "./PersonUpdateManyWithoutRacesInput";

export type RaceUpdateInput = {
  averageHeight?: number | null;
  averageLifespan?: number | null;
  classification?: string | null;
  description?: string | null;
  designtation?: string | null;
  eyeColors?: InputJsonValue;
  films?: FilmUpdateManyWithoutRacesInput;
  hairColors?: InputJsonValue;
  language?: string | null;
  name?: string | null;
  people?: PersonUpdateManyWithoutRacesInput;
  skinColors?: InputJsonValue;
};
