import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  birthYear?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  eyeColor?: SortOrder;
  gender?: SortOrder;
  hairColor?: SortOrder;
  height?: SortOrder;
  id?: SortOrder;
  mass?: SortOrder;
  name?: SortOrder;
  planetId?: SortOrder;
  skinColor?: SortOrder;
  updatedAt?: SortOrder;
};
