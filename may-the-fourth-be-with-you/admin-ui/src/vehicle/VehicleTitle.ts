import { Vehicle as TVehicle } from "../api/vehicle/Vehicle";

export const VEHICLE_TITLE_FIELD = "name";

export const VehicleTitle = (record: TVehicle): string => {
  return record.name || String(record.id);
};
