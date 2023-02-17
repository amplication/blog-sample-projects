import { Generation as TGeneration } from "../api/generation/Generation";

export const GENERATION_TITLE_FIELD = "name";

export const GenerationTitle = (record: TGeneration): string => {
  return record.name || String(record.id);
};
