import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { GenerationWhereUniqueInput } from "../generation/GenerationWhereUniqueInput";
import { TypingListRelationFilter } from "../typing/TypingListRelationFilter";

export type MonsterWhereInput = {
  biology?: StringFilter;
  dexNumber?: IntFilter;
  generation?: GenerationWhereUniqueInput;
  id?: StringFilter;
  image?: StringFilter;
  name?: StringFilter;
  typing?: TypingListRelationFilter;
  url?: StringFilter;
};
