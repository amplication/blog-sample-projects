import { InputJsonValue } from "../../types";
import { FilmUpdateManyWithoutPlanetsInput } from "./FilmUpdateManyWithoutPlanetsInput";
import { PersonUpdateManyWithoutPlanetsInput } from "./PersonUpdateManyWithoutPlanetsInput";

export type PlanetUpdateInput = {
  climates?: InputJsonValue;
  description?: string | null;
  diameter?: number | null;
  films?: FilmUpdateManyWithoutPlanetsInput;
  gravity?: string | null;
  name?: string | null;
  orbitalPeriod?: number | null;
  people?: PersonUpdateManyWithoutPlanetsInput;
  population?: number | null;
  rotationPeriod?: number | null;
  surfaceWater?: number | null;
  terrains?: InputJsonValue;
};
