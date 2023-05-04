import { InputJsonValue } from "../../types";
import { FilmCreateNestedManyWithoutPlanetsInput } from "./FilmCreateNestedManyWithoutPlanetsInput";
import { PersonCreateNestedManyWithoutPlanetsInput } from "./PersonCreateNestedManyWithoutPlanetsInput";

export type PlanetCreateInput = {
  climates?: InputJsonValue;
  description?: string | null;
  diameter?: number | null;
  films?: FilmCreateNestedManyWithoutPlanetsInput;
  gravity?: string | null;
  name?: string | null;
  orbitalPeriod?: number | null;
  people?: PersonCreateNestedManyWithoutPlanetsInput;
  population?: number | null;
  rotationPeriod?: number | null;
  surfaceWater?: number | null;
  terrains?: InputJsonValue;
};
