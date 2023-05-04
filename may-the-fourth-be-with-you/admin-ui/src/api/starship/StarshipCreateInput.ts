import { FilmCreateNestedManyWithoutStarshipsInput } from "./FilmCreateNestedManyWithoutStarshipsInput";
import { InputJsonValue } from "../../types";
import { PersonCreateNestedManyWithoutStarshipsInput } from "./PersonCreateNestedManyWithoutStarshipsInput";

export type StarshipCreateInput = {
  cargoCapacity?: number | null;
  consumables?: string | null;
  costInCredits?: number | null;
  crew?: string | null;
  description?: string | null;
  films?: FilmCreateNestedManyWithoutStarshipsInput;
  hyperdriveRating?: number | null;
  length?: number | null;
  manufacturer?: InputJsonValue;
  maxAtmospheringSpeed?: number | null;
  mglt?: number | null;
  model?: string | null;
  name?: string | null;
  passengers?: string | null;
  people?: PersonCreateNestedManyWithoutStarshipsInput;
  starshipClass?: string | null;
};
