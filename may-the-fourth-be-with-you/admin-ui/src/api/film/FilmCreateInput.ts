import { PersonCreateNestedManyWithoutFilmsInput } from "./PersonCreateNestedManyWithoutFilmsInput";
import { PlanetCreateNestedManyWithoutFilmsInput } from "./PlanetCreateNestedManyWithoutFilmsInput";
import { InputJsonValue } from "../../types";
import { RaceCreateNestedManyWithoutFilmsInput } from "./RaceCreateNestedManyWithoutFilmsInput";
import { StarshipWhereUniqueInput } from "../starship/StarshipWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type FilmCreateInput = {
  description?: string | null;
  director?: string | null;
  episodeId?: number | null;
  openingCrawl?: string | null;
  people?: PersonCreateNestedManyWithoutFilmsInput;
  planets?: PlanetCreateNestedManyWithoutFilmsInput;
  producers?: InputJsonValue;
  races?: RaceCreateNestedManyWithoutFilmsInput;
  releaseDate?: Date | null;
  starships?: StarshipWhereUniqueInput | null;
  title?: string | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
