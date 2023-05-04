import { FilmWhereUniqueInput } from "./FilmWhereUniqueInput";
import { FilmUpdateInput } from "./FilmUpdateInput";

export type UpdateFilmArgs = {
  where: FilmWhereUniqueInput;
  data: FilmUpdateInput;
};
