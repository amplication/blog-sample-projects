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

import { STARSHIP_TITLE_FIELD } from "./StarshipTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const StarshipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cargo Capacity" source="cargoCapacity" />
        <TextField label="Consumables" source="consumables" />
        <TextField label="Cost in Credits" source="costInCredits" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Crew" source="crew" />
        <TextField label="Description" source="description" />
        <TextField label="Hyperdrive Rating" source="hyperdriveRating" />
        <TextField label="ID" source="id" />
        <TextField label="Length" source="length" />
        <TextField label="Manufacturer" source="manufacturer" />
        <TextField
          label="Max Atmosphering Speed"
          source="maxAtmospheringSpeed"
        />
        <TextField label="MGLT" source="mglt" />
        <TextField label="Model" source="model" />
        <TextField label="Name" source="name" />
        <TextField label="Passengers" source="passengers" />
        <TextField label="Starship Class" source="starshipClass" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Film" target="StarshipId" label="Films">
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
