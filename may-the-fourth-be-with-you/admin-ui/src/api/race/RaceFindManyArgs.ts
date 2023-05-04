import { RaceWhereInput } from "./RaceWhereInput";
import { RaceOrderByInput } from "./RaceOrderByInput";

export type RaceFindManyArgs = {
  where?: RaceWhereInput;
  orderBy?: Array<RaceOrderByInput>;
  skip?: number;
  take?: number;
};
