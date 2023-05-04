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

import { PLANET_TITLE_FIELD } from "./PlanetTitle";

export const PlanetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Climates" source="climates" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Diameter" source="diameter" />
        <TextField label="Gravity" source="gravity" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Orbital Period" source="orbitalPeriod" />
        <TextField label="Population" source="population" />
        <TextField label="Rotation Period" source="rotationPeriod" />
        <TextField label="Surface Water" source="surfaceWater" />
        <TextField label="Terrains" source="terrains" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Person" target="PlanetId" label="People">
          <Datagrid rowClick="show">
            <TextField label="Birth Year" source="birthYear" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Eye Color" source="eyeColor" />
            <TextField label="Gender" source="gender" />
            <TextField label="Hair Color" source="hairColor" />
            <TextField label="Height" source="height" />
            <TextField label="ID" source="id" />
            <TextField label="Mass" source="mass" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Planet"
              source="planet.id"
              reference="Planet"
            >
              <TextField source={PLANET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Skin Color" source="skinColor" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
