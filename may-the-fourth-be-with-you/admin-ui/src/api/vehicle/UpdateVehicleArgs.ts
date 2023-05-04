import { VehicleWhereUniqueInput } from "./VehicleWhereUniqueInput";
import { VehicleUpdateInput } from "./VehicleUpdateInput";

export type UpdateVehicleArgs = {
  where: VehicleWhereUniqueInput;
  data: VehicleUpdateInput;
};
