import { FilmUpdateManyWithoutStarshipsInput } from "./FilmUpdateManyWithoutStarshipsInput";
import { InputJsonValue } from "../../types";
import { PersonUpdateManyWithoutStarshipsInput } from "./PersonUpdateManyWithoutStarshipsInput";

export type StarshipUpdateInput = {
  cargoCapacity?: number | null;
  consumables?: string | null;
  costInCredits?: number | null;
  crew?: string | null;
  description?: string | null;
  films?: FilmUpdateManyWithoutStarshipsInput;
  hyperdriveRating?: number | null;
  length?: number | null;
  manufacturer?: InputJsonValue;
  maxAtmospheringSpeed?: number | null;
  mglt?: number | null;
  model?: string | null;
  name?: string | null;
  passengers?: string | null;
  people?: PersonUpdateManyWithoutStarshipsInput;
  starshipClass?: string | null;
};
