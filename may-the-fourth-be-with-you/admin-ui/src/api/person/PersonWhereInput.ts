import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FilmListRelationFilter } from "../film/FilmListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PlanetWhereUniqueInput } from "../planet/PlanetWhereUniqueInput";
import { RaceListRelationFilter } from "../race/RaceListRelationFilter";
import { StarshipListRelationFilter } from "../starship/StarshipListRelationFilter";
import { VehicleListRelationFilter } from "../vehicle/VehicleListRelationFilter";

export type PersonWhereInput = {
  birthYear?: StringNullableFilter;
  description?: StringNullableFilter;
  eyeColor?: StringNullableFilter;
  films?: FilmListRelationFilter;
  gender?: StringNullableFilter;
  hairColor?: StringNullableFilter;
  height?: IntNullableFilter;
  id?: StringFilter;
  mass?: FloatNullableFilter;
  name?: StringNullableFilter;
  planet?: PlanetWhereUniqueInput;
  races?: RaceListRelationFilter;
  skinColor?: StringNullableFilter;
  starships?: StarshipListRelationFilter;
  vehicles?: VehicleListRelationFilter;
};
