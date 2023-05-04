import { Race as TRace } from "../api/race/Race";

export const RACE_TITLE_FIELD = "name";

export const RaceTitle = (record: TRace): string => {
  return record.name || String(record.id);
};
