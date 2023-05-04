import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FilmTitle } from "../film/FilmTitle";
import { PersonTitle } from "../person/PersonTitle";

export const PlanetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Diameter" source="diameter" />
        <ReferenceArrayInput
          source="films"
          reference="Film"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FilmTitle} />
        </ReferenceArrayInput>
        <TextInput label="Gravity" source="gravity" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Orbital Period" source="orbitalPeriod" />
        <ReferenceArrayInput
          source="people"
          reference="Person"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PersonTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Population" source="population" />
        <NumberInput step={1} label="Rotation Period" source="rotationPeriod" />
        <NumberInput label="Surface Water" source="surfaceWater" />
        <div />
      </SimpleForm>
    </Create>
  );
};
