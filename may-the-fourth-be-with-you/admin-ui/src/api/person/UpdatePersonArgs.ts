import { PersonWhereUniqueInput } from "./PersonWhereUniqueInput";
import { PersonUpdateInput } from "./PersonUpdateInput";

export type UpdatePersonArgs = {
  where: PersonWhereUniqueInput;
  data: PersonUpdateInput;
};
