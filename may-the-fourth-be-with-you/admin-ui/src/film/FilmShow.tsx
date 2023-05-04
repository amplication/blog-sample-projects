import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { STARSHIP_TITLE_FIELD } from "../starship/StarshipTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const FilmShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
