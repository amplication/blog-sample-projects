import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  cargoCapacity?: SortOrder;
  consumables?: SortOrder;
  costInCredits?: SortOrder;
  createdAt?: SortOrder;
  crew?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  length?: SortOrder;
  manufacturer?: SortOrder;
  maxAtmoshpheringSpeed?: SortOrder;
  model?: SortOrder;
  name?: SortOrder;
  passengers?: SortOrder;
  updatedAt?: SortOrder;
  vehicleClass?: SortOrder;
};
