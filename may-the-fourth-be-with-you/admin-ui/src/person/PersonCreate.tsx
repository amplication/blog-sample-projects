import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FilmTitle } from "../film/FilmTitle";
import { PlanetTitle } from "../planet/PlanetTitle";
import { RaceTitle } from "../race/RaceTitle";
import { StarshipTitle } from "../starship/StarshipTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const PersonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Birth Year" source="birthYear" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Eye Color" source="eyeColor" />
        <ReferenceArrayInput
          source="films"
          reference="Film"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FilmTitle} />
        </ReferenceArrayInput>
        <TextInput label="Gender" source="gender" />
        <TextInput label="Hair Color" source="hairColor" />
        <NumberInput step={1} label="Height" source="height" />
        <NumberInput label="Mass" source="mass" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="planet.id" reference="Planet" label="Planet">
          <SelectInput optionText={PlanetTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="races"
          reference="Race"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RaceTitle} />
        </ReferenceArrayInput>
        <TextInput label="Skin Color" source="skinColor" />
        <ReferenceArrayInput
          source="starships"
          reference="Starship"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StarshipTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="vehicles"
          reference="Vehicle"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VehicleTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
