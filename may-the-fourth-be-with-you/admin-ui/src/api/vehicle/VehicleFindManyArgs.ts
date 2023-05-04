import { VehicleWhereInput } from "./VehicleWhereInput";
import { VehicleOrderByInput } from "./VehicleOrderByInput";

export type VehicleFindManyArgs = {
  where?: VehicleWhereInput;
  orderBy?: Array<VehicleOrderByInput>;
  skip?: number;
  take?: number;
};
