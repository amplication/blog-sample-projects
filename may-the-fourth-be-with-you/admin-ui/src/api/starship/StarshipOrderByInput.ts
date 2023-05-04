import { SortOrder } from "../../util/SortOrder";

export type StarshipOrderByInput = {
  cargoCapacity?: SortOrder;
  consumables?: SortOrder;
  costInCredits?: SortOrder;
  createdAt?: SortOrder;
  crew?: SortOrder;
  description?: SortOrder;
  hyperdriveRating?: SortOrder;
  id?: SortOrder;
  length?: SortOrder;
  manufacturer?: SortOrder;
  maxAtmospheringSpeed?: SortOrder;
  mglt?: SortOrder;
  model?: SortOrder;
  name?: SortOrder;
  passengers?: SortOrder;
  starshipClass?: SortOrder;
  updatedAt?: SortOrder;
};
