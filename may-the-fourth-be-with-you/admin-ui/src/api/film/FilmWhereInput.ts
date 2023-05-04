import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PersonListRelationFilter } from "../person/PersonListRelationFilter";
import { PlanetListRelationFilter } from "../planet/PlanetListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RaceListRelationFilter } from "../race/RaceListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StarshipWhereUniqueInput } from "../starship/StarshipWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type FilmWhereInput = {
  description?: StringNullableFilter;
  director?: StringNullableFilter;
  episodeId?: IntNullableFilter;
  id?: StringFilter;
  openingCrawl?: StringNullableFilter;
  people?: PersonListRelationFilter;
  planets?: PlanetListRelationFilter;
  producers?: JsonFilter;
  races?: RaceListRelationFilter;
  releaseDate?: DateTimeNullableFilter;
  starships?: StarshipWhereUniqueInput;
  title?: StringNullableFilter;
  vehicle?: VehicleWhereUniqueInput;
};
