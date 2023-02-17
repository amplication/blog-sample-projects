import { Monster } from "../monster/Monster";

export type Generation = {
  createdAt: Date;
  id: string;
  monsters?: Array<Monster>;
  name: string;
  updatedAt: Date;
};
