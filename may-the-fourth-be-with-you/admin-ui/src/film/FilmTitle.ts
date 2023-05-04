import { Film as TFilm } from "../api/film/Film";

export const FILM_TITLE_FIELD = "title";

export const FilmTitle = (record: TFilm): string => {
  return record.title || String(record.id);
};
