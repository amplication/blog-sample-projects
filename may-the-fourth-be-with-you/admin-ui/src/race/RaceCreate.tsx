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

export const RaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Average Height" source="averageHeight" />
        <NumberInput
          step={1}
          label="Average Lifespan"
          source="averageLifespan"
        />
        <TextInput label="Classification" source="classification" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Designtation" source="designtation" />
        <div />
        <ReferenceArrayInput
          source="films"
          reference="Film"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FilmTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="Language" source="language" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="people"
          reference="Person"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PersonTitle} />
        </ReferenceArrayInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
