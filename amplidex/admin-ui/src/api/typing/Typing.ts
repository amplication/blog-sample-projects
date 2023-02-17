import { Monster } from "../monster/Monster";

export type Typing = {
  createdAt: Date;
  id: string;
  monsters?: Array<Monster>;
  name: string;
  updatedAt: Date;
};
