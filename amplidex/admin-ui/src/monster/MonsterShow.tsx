import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { GENERATION_TITLE_FIELD } from "../generation/GenerationTitle";

export const MonsterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
