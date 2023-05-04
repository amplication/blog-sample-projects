import { PersonWhereInput } from "./PersonWhereInput";

export type PersonListRelationFilter = {
  every?: PersonWhereInput;
  some?: PersonWhereInput;
  none?: PersonWhereInput;
};
