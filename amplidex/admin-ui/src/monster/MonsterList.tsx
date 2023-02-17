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
import { GENERATION_TITLE_FIELD } from "../generation/GenerationTitle";

export const MonsterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Monsters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Biology" source="biology" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Dex Number" source="dexNumber" />
        <ReferenceField
          label="Generation"
          source="generation.id"
          reference="Generation"
        >
          <TextField source={GENERATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="URL" source="url" />
      </Datagrid>
    </List>
  );
};
