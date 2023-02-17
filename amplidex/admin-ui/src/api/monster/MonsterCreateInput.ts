import { GenerationWhereUniqueInput } from "../generation/GenerationWhereUniqueInput";
import { TypingCreateNestedManyWithoutMonstersInput } from "./TypingCreateNestedManyWithoutMonstersInput";

export type MonsterCreateInput = {
  biology: string;
  dexNumber: number;
  generation: GenerationWhereUniqueInput;
  image: string;
  name: string;
  typing?: TypingCreateNestedManyWithoutMonstersInput;
  url: string;
};
