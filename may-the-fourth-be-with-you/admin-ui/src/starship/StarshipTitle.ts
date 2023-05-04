import { Starship as TStarship } from "../api/starship/Starship";

export const STARSHIP_TITLE_FIELD = "name";

export const StarshipTitle = (record: TStarship): string => {
  return record.name || String(record.id);
};
