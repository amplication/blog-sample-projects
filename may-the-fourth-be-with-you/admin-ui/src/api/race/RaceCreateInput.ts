import { InputJsonValue } from "../../types";
import { FilmCreateNestedManyWithoutRacesInput } from "./FilmCreateNestedManyWithoutRacesInput";
import { PersonCreateNestedManyWithoutRacesInput } from "./PersonCreateNestedManyWithoutRacesInput";

export type RaceCreateInput = {
  averageHeight?: number | null;
  averageLifespan?: number | null;
  classification?: string | null;
  description?: string | null;
  designtation?: string | null;
  eyeColors?: InputJsonValue;
  films?: FilmCreateNestedManyWithoutRacesInput;
  hairColors?: InputJsonValue;
  language?: string | null;
  name?: string | null;
  people?: PersonCreateNestedManyWithoutRacesInput;
  skinColors?: InputJsonValue;
};
