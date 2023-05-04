import { FilmCreateNestedManyWithoutPeopleInput } from "./FilmCreateNestedManyWithoutPeopleInput";
import { PlanetWhereUniqueInput } from "../planet/PlanetWhereUniqueInput";
import { RaceCreateNestedManyWithoutPeopleInput } from "./RaceCreateNestedManyWithoutPeopleInput";
import { StarshipCreateNestedManyWithoutPeopleInput } from "./StarshipCreateNestedManyWithoutPeopleInput";
import { VehicleCreateNestedManyWithoutPeopleInput } from "./VehicleCreateNestedManyWithoutPeopleInput";

export type PersonCreateInput = {
  birthYear?: string | null;
  description?: string | null;
  eyeColor?: string | null;
  films?: FilmCreateNestedManyWithoutPeopleInput;
  gender?: string | null;
  hairColor?: string | null;
  height?: number | null;
  mass?: number | null;
  name?: string | null;
  planet?: PlanetWhereUniqueInput | null;
  races?: RaceCreateNestedManyWithoutPeopleInput;
  skinColor?: string | null;
  starships?: StarshipCreateNestedManyWithoutPeopleInput;
  vehicles?: VehicleCreateNestedManyWithoutPeopleInput;
};
