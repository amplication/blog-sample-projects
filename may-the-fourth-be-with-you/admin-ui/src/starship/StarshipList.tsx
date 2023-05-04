import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StarshipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Starships"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
