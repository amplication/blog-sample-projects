import { Typing as TTyping } from "../api/typing/Typing";

export const TYPING_TITLE_FIELD = "name";

export const TypingTitle = (record: TTyping): string => {
  return record.name || String(record.id);
};
