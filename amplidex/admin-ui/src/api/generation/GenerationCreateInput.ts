import { MonsterCreateNestedManyWithoutGenerationsInput } from "./MonsterCreateNestedManyWithoutGenerationsInput";

export type GenerationCreateInput = {
  monsters?: MonsterCreateNestedManyWithoutGenerationsInput;
  name: string;
};
