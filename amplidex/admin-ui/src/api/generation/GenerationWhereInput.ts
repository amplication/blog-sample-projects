import { StringFilter } from "../../util/StringFilter";
import { MonsterListRelationFilter } from "../monster/MonsterListRelationFilter";

export type GenerationWhereInput = {
  id?: StringFilter;
  monsters?: MonsterListRelationFilter;
  name?: StringFilter;
};
