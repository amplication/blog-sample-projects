import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FilmListRelationFilter } from "../film/FilmListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PersonListRelationFilter } from "../person/PersonListRelationFilter";

export type RaceWhereInput = {
  averageHeight?: FloatNullableFilter;
  averageLifespan?: IntNullableFilter;
  classification?: StringNullableFilter;
  description?: StringNullableFilter;
  designtation?: StringNullableFilter;
  eyeColors?: JsonFilter;
  films?: FilmListRelationFilter;
  hairColors?: JsonFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  name?: StringNullableFilter;
  people?: PersonListRelationFilter;
  skinColors?: JsonFilter;
};
