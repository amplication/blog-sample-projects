import { Generation } from "../generation/Generation";
import { Typing } from "../typing/Typing";

export type Monster = {
  biology: string;
  createdAt: Date;
  dexNumber: number;
  generation?: Generation;
  id: string;
  image: string;
  name: string;
  typing?: Array<Typing>;
  updatedAt: Date;
  url: string;
};
