import { Planet as TPlanet } from "../api/planet/Planet";

export const PLANET_TITLE_FIELD = "name";

export const PlanetTitle = (record: TPlanet): string => {
  return record.name || String(record.id);
};
