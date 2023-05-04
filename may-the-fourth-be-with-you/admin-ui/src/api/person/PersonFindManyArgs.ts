import { PersonWhereInput } from "./PersonWhereInput";
import { PersonOrderByInput } from "./PersonOrderByInput";

export type PersonFindManyArgs = {
  where?: PersonWhereInput;
  orderBy?: Array<PersonOrderByInput>;
  skip?: number;
  take?: number;
};
