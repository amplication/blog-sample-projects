import { SortOrder } from "../../util/SortOrder";

export type FilmOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  director?: SortOrder;
  episodeId?: SortOrder;
  id?: SortOrder;
  openingCrawl?: SortOrder;
  producers?: SortOrder;
  releaseDate?: SortOrder;
  starshipsId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
};
