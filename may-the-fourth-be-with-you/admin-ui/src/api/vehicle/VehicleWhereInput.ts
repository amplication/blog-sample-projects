import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FilmListRelationFilter } from "../film/FilmListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PersonListRelationFilter } from "../person/PersonListRelationFilter";

export type VehicleWhereInput = {
  cargoCapacity?: FloatNullableFilter;
  consumables?: StringNullableFilter;
  costInCredits?: FloatNullableFilter;
  crew?: StringNullableFilter;
  description?: StringNullableFilter;
  films?: FilmListRelationFilter;
  id?: StringFilter;
  length?: FloatNullableFilter;
  manufacturer?: JsonFilter;
  maxAtmoshpheringSpeed?: IntNullableFilter;
  model?: StringNullableFilter;
  name?: StringNullableFilter;
  passengers?: StringNullableFilter;
  people?: PersonListRelationFilter;
  vehicleClass?: StringNullableFilter;
};
