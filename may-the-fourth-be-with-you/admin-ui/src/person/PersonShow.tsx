import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PLANET_TITLE_FIELD } from "../planet/PlanetTitle";

export const PersonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Planet" source="planet.id" reference="Planet">
          <TextField source={PLANET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Skin Color" source="skinColor" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
