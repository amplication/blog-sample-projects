import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GENERATION_TITLE_FIELD } from "./GenerationTitle";

export const GenerationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Monster"
          target="GenerationId"
          label="Monsters"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
