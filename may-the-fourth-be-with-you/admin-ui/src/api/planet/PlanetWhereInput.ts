import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FilmListRelationFilter } from "../film/FilmListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PersonListRelationFilter } from "../person/PersonListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PlanetWhereInput = {
  climates?: JsonFilter;
  description?: StringNullableFilter;
  diameter?: IntNullableFilter;
  films?: FilmListRelationFilter;
  gravity?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orbitalPeriod?: IntNullableFilter;
  people?: PersonListRelationFilter;
  population?: FloatNullableFilter;
  rotationPeriod?: IntNullableFilter;
  surfaceWater?: FloatNullableFilter;
  terrains?: JsonFilter;
};
