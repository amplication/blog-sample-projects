import { GenerationWhereUniqueInput } from "../generation/GenerationWhereUniqueInput";
import { TypingUpdateManyWithoutMonstersInput } from "./TypingUpdateManyWithoutMonstersInput";

export type MonsterUpdateInput = {
  biology?: string;
  dexNumber?: number;
  generation?: GenerationWhereUniqueInput;
  image?: string;
  name?: string;
  typing?: TypingUpdateManyWithoutMonstersInput;
  url?: string;
};
