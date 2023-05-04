import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PersonTitle } from "../person/PersonTitle";
import { PlanetTitle } from "../planet/PlanetTitle";
import { RaceTitle } from "../race/RaceTitle";
import { StarshipTitle } from "../starship/StarshipTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const FilmEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Director" source="director" />
        <NumberInput step={1} label="Episode ID" source="episodeId" />
        <TextInput label="Opening Crawl" source="openingCrawl" />
        <ReferenceArrayInput
          source="people"
          reference="Person"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PersonTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="planets"
          reference="Planet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlanetTitle} />
        </ReferenceArrayInput>
        <div />
        <ReferenceArrayInput
          source="races"
          reference="Race"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RaceTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Release Date" source="releaseDate" />
        <ReferenceInput
          source="starships.id"
          reference="Starship"
          label="Starships"
        >
          <SelectInput optionText={StarshipTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <ReferenceInput
          source="vehicle.id"
          reference="Vehicle"
          label="Vehicles"
        >
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
