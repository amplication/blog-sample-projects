import { MonsterCreateNestedManyWithoutTypingsInput } from "./MonsterCreateNestedManyWithoutTypingsInput";

export type TypingCreateInput = {
  monsters?: MonsterCreateNestedManyWithoutTypingsInput;
  name: string;
};
