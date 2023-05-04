import { Person as TPerson } from "../api/person/Person";

export const PERSON_TITLE_FIELD = "name";

export const PersonTitle = (record: TPerson): string => {
  return record.name || String(record.id);
};
