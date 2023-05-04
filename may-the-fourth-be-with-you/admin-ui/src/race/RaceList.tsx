import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RaceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Races"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Average Height" source="averageHeight" />
        <TextField label="Average Lifespan" source="averageLifespan" />
        <TextField label="Classification" source="classification" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Designtation" source="designtation" />
        <TextField label="Eye Colors" source="eyeColors" />
        <TextField label="Hair Colors" source="hairColors" />
        <TextField label="ID" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="Name" source="name" />
        <TextField label="Skin Colors" source="skinColors" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
