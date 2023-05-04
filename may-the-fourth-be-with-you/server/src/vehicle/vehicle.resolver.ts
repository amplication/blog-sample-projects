import * as graphql from "@nestjs/graphql";
import { VehicleResolverBase } from "./base/vehicle.resolver.base";
import { Vehicle } from "./base/Vehicle";
import { VehicleService } from "./vehicle.service";

@graphql.Resolver(() => Vehicle)
export class VehicleResolver extends VehicleResolverBase {
  constructor(protected readonly service: VehicleService) {
    super(service);
  }
}
