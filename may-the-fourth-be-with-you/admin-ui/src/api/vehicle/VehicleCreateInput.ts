import { FilmCreateNestedManyWithoutVehiclesInput } from "./FilmCreateNestedManyWithoutVehiclesInput";
import { InputJsonValue } from "../../types";
import { PersonCreateNestedManyWithoutVehiclesInput } from "./PersonCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  cargoCapacity?: number | null;
  consumables?: string | null;
  costInCredits?: number | null;
  crew?: string | null;
  description?: string | null;
  films?: FilmCreateNestedManyWithoutVehiclesInput;
  length?: number | null;
  manufacturer?: InputJsonValue;
  maxAtmoshpheringSpeed?: number | null;
  model?: string | null;
  name?: string | null;
  passengers?: string | null;
  people?: PersonCreateNestedManyWithoutVehiclesInput;
  vehicleClass?: string | null;
};
