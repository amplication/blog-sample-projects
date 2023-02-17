import { Monster as TMonster } from "../api/monster/Monster";

export const MONSTER_TITLE_FIELD = "name";

export const MonsterTitle = (record: TMonster): string => {
  return record.name || String(record.id);
};
