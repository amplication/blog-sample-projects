import { StringFilter } from "../../util/StringFilter";
import { MonsterListRelationFilter } from "../monster/MonsterListRelationFilter";

export type TypingWhereInput = {
  id?: StringFilter;
  monsters?: MonsterListRelationFilter;
  name?: StringFilter;
};
