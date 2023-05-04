import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FilmTitle } from "../film/FilmTitle";
import { PersonTitle } from "../person/PersonTitle";

export const VehicleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Cargo Capacity" source="cargoCapacity" />
        <TextInput label="Consumables" source="consumables" />
        <NumberInput label="Cost in Credits" source="costInCredits" />
        <TextInput label="Crew" source="crew" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="films"
          reference="Film"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FilmTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Length" source="length" />
        <div />
        <NumberInput
          step={1}
          label="Max Atmoshphering Speed"
          source="maxAtmoshpheringSpeed"
        />
        <TextInput label="Model" source="model" />
        <TextInput label="Name" source="name" />
        <TextInput label="Passengers" source="passengers" />
        <ReferenceArrayInput
          source="people"
          reference="Person"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PersonTitle} />
        </ReferenceArrayInput>
        <TextInput label="Vehicle Class" source="vehicleClass" />
      </SimpleForm>
    </Create>
  );
};
