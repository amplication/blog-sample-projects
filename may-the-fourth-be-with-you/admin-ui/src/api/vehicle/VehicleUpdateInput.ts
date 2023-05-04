import { FilmUpdateManyWithoutVehiclesInput } from "./FilmUpdateManyWithoutVehiclesInput";
import { InputJsonValue } from "../../types";
import { PersonUpdateManyWithoutVehiclesInput } from "./PersonUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  cargoCapacity?: number | null;
  consumables?: string | null;
  costInCredits?: number | null;
  crew?: string | null;
  description?: string | null;
  films?: FilmUpdateManyWithoutVehiclesInput;
  length?: number | null;
  manufacturer?: InputJsonValue;
  maxAtmoshpheringSpeed?: number | null;
  model?: string | null;
  name?: string | null;
  passengers?: string | null;
  people?: PersonUpdateManyWithoutVehiclesInput;
  vehicleClass?: string | null;
};
