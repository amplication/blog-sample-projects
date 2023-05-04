import { PlanetWhereInput } from "./PlanetWhereInput";
import { PlanetOrderByInput } from "./PlanetOrderByInput";

export type PlanetFindManyArgs = {
  where?: PlanetWhereInput;
  orderBy?: Array<PlanetOrderByInput>;
  skip?: number;
  take?: number;
};
