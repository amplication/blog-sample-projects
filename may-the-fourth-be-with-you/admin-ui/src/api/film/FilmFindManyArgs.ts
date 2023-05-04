import { FilmWhereInput } from "./FilmWhereInput";
import { FilmOrderByInput } from "./FilmOrderByInput";

export type FilmFindManyArgs = {
  where?: FilmWhereInput;
  orderBy?: Array<FilmOrderByInput>;
  skip?: number;
  take?: number;
};
