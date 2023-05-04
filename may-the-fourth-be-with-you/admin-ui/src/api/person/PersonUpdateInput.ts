import { FilmUpdateManyWithoutPeopleInput } from "./FilmUpdateManyWithoutPeopleInput";
import { PlanetWhereUniqueInput } from "../planet/PlanetWhereUniqueInput";
import { RaceUpdateManyWithoutPeopleInput } from "./RaceUpdateManyWithoutPeopleInput";
import { StarshipUpdateManyWithoutPeopleInput } from "./StarshipUpdateManyWithoutPeopleInput";
import { VehicleUpdateManyWithoutPeopleInput } from "./VehicleUpdateManyWithoutPeopleInput";

export type PersonUpdateInput = {
  birthYear?: string | null;
  description?: string | null;
  eyeColor?: string | null;
  films?: FilmUpdateManyWithoutPeopleInput;
  gender?: string | null;
  hairColor?: string | null;
  height?: number | null;
  mass?: number | null;
  name?: string | null;
  planet?: PlanetWhereUniqueInput | null;
  races?: RaceUpdateManyWithoutPeopleInput;
  skinColor?: string | null;
  starships?: StarshipUpdateManyWithoutPeopleInput;
  vehicles?: VehicleUpdateManyWithoutPeopleInput;
};
