import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PLANET_TITLE_FIELD } from "../planet/PlanetTitle";

export const PersonList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"People"}
      perPage={50}
      pagination={<Pagination />}
    >
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
        <ReferenceField label="Planet" source="planet.id" reference="Planet">
          <TextField source={PLANET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Skin Color" source="skinColor" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
