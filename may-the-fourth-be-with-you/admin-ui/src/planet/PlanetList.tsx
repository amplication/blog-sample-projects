import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PlanetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Planets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
