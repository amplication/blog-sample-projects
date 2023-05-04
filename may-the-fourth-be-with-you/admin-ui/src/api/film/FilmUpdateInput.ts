import { PersonUpdateManyWithoutFilmsInput } from "./PersonUpdateManyWithoutFilmsInput";
import { PlanetUpdateManyWithoutFilmsInput } from "./PlanetUpdateManyWithoutFilmsInput";
import { InputJsonValue } from "../../types";
import { RaceUpdateManyWithoutFilmsInput } from "./RaceUpdateManyWithoutFilmsInput";
import { StarshipWhereUniqueInput } from "../starship/StarshipWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type FilmUpdateInput = {
  description?: string | null;
  director?: string | null;
  episodeId?: number | null;
  openingCrawl?: string | null;
  people?: PersonUpdateManyWithoutFilmsInput;
  planets?: PlanetUpdateManyWithoutFilmsInput;
  producers?: InputJsonValue;
  races?: RaceUpdateManyWithoutFilmsInput;
  releaseDate?: Date | null;
  starships?: StarshipWhereUniqueInput | null;
  title?: string | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
