import { StarshipWhereInput } from "./StarshipWhereInput";
import { StarshipOrderByInput } from "./StarshipOrderByInput";

export type StarshipFindManyArgs = {
  where?: StarshipWhereInput;
  orderBy?: Array<StarshipOrderByInput>;
  skip?: number;
  take?: number;
};
