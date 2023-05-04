import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STARSHIP_TITLE_FIELD } from "../starship/StarshipTitle";
import { VEHICLE_TITLE_FIELD } from "./VehicleTitle";

export const VehicleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cargo Capacity" source="cargoCapacity" />
        <TextField label="Consumables" source="consumables" />
        <TextField label="Cost in Credits" source="costInCredits" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Crew" source="crew" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Length" source="length" />
        <TextField label="Manufacturer" source="manufacturer" />
        <TextField
          label="Max Atmoshphering Speed"
          source="maxAtmoshpheringSpeed"
        />
        <TextField label="Model" source="model" />
        <TextField label="Name" source="name" />
        <TextField label="Passengers" source="passengers" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Vehicle Class" source="vehicleClass" />
        <ReferenceManyField reference="Film" target="VehicleId" label="Films">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Director" source="director" />
            <TextField label="Episode ID" source="episodeId" />
            <TextField label="ID" source="id" />
            <TextField label="Opening Crawl" source="openingCrawl" />
            <TextField label="Producers" source="producers" />
            <TextField label="Release Date" source="releaseDate" />
            <ReferenceField
              label="Starships"
              source="starship.id"
              reference="Starship"
            >
              <TextField source={STARSHIP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Vehicles"
              source="vehicle.id"
              reference="Vehicle"
            >
              <TextField source={VEHICLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
