import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FilmListRelationFilter } from "../film/FilmListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PersonListRelationFilter } from "../person/PersonListRelationFilter";

export type StarshipWhereInput = {
  cargoCapacity?: FloatNullableFilter;
  consumables?: StringNullableFilter;
  costInCredits?: FloatNullableFilter;
  crew?: StringNullableFilter;
  description?: StringNullableFilter;
  films?: FilmListRelationFilter;
  hyperdriveRating?: FloatNullableFilter;
  id?: StringFilter;
  length?: FloatNullableFilter;
  manufacturer?: JsonFilter;
  maxAtmospheringSpeed?: IntNullableFilter;
  mglt?: IntNullableFilter;
  model?: StringNullableFilter;
  name?: StringNullableFilter;
  passengers?: StringNullableFilter;
  people?: PersonListRelationFilter;
  starshipClass?: StringNullableFilter;
};
