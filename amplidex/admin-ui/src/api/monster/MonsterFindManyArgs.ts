import { MonsterWhereInput } from "./MonsterWhereInput";
import { MonsterOrderByInput } from "./MonsterOrderByInput";

export type MonsterFindManyArgs = {
  where?: MonsterWhereInput;
  orderBy?: Array<MonsterOrderByInput>;
  skip?: number;
  take?: number;
};
