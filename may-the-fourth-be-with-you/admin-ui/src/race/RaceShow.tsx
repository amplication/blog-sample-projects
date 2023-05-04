import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
