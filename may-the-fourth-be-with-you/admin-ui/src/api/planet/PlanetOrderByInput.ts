import { SortOrder } from "../../util/SortOrder";

export type PlanetOrderByInput = {
  climates?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  diameter?: SortOrder;
  gravity?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  orbitalPeriod?: SortOrder;
  population?: SortOrder;
  rotationPeriod?: SortOrder;
  surfaceWater?: SortOrder;
  terrains?: SortOrder;
  updatedAt?: SortOrder;
};
