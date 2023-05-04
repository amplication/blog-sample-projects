import { FilmWhereInput } from "./FilmWhereInput";

export type FilmListRelationFilter = {
  every?: FilmWhereInput;
  some?: FilmWhereInput;
  none?: FilmWhereInput;
};
