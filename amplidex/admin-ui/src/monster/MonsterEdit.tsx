import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GenerationTitle } from "../generation/GenerationTitle";
import { TypingTitle } from "../typing/TypingTitle";

export const MonsterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Biology" multiline source="biology" />
        <NumberInput step={1} label="Dex Number" source="dexNumber" />
        <ReferenceInput
          source="generation.id"
          reference="Generation"
          label="Generation"
        >
          <SelectInput optionText={GenerationTitle} />
        </ReferenceInput>
        <TextInput label="Image" source="image" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="typing"
          reference="Typing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TypingTitle} />
        </ReferenceArrayInput>
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Edit>
  );
};
