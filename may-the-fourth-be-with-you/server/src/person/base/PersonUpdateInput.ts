/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsInt,
  IsNumber,
} from "class-validator";
import { FilmUpdateManyWithoutPeopleInput } from "./FilmUpdateManyWithoutPeopleInput";
import { Type } from "class-transformer";
import { PlanetWhereUniqueInput } from "../../planet/base/PlanetWhereUniqueInput";
import { RaceUpdateManyWithoutPeopleInput } from "./RaceUpdateManyWithoutPeopleInput";
import { StarshipUpdateManyWithoutPeopleInput } from "./StarshipUpdateManyWithoutPeopleInput";
import { VehicleUpdateManyWithoutPeopleInput } from "./VehicleUpdateManyWithoutPeopleInput";

@InputType()
class PersonUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  birthYear?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  eyeColor?: string | null;

  @ApiProperty({
    required: false,
    type: () => FilmUpdateManyWithoutPeopleInput,
  })
  @ValidateNested()
  @Type(() => FilmUpdateManyWithoutPeopleInput)
  @IsOptional()
  @Field(() => FilmUpdateManyWithoutPeopleInput, {
    nullable: true,
  })
  films?: FilmUpdateManyWithoutPeopleInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  gender?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hairColor?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  height?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  mass?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PlanetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlanetWhereUniqueInput)
  @IsOptional()
  @Field(() => PlanetWhereUniqueInput, {
    nullable: true,
  })
  planet?: PlanetWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => RaceUpdateManyWithoutPeopleInput,
  })
  @ValidateNested()
  @Type(() => RaceUpdateManyWithoutPeopleInput)
  @IsOptional()
  @Field(() => RaceUpdateManyWithoutPeopleInput, {
    nullable: true,
  })
  races?: RaceUpdateManyWithoutPeopleInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  skinColor?: string | null;

  @ApiProperty({
    required: false,
    type: () => StarshipUpdateManyWithoutPeopleInput,
  })
  @ValidateNested()
  @Type(() => StarshipUpdateManyWithoutPeopleInput)
  @IsOptional()
  @Field(() => StarshipUpdateManyWithoutPeopleInput, {
    nullable: true,
  })
  starships?: StarshipUpdateManyWithoutPeopleInput;

  @ApiProperty({
    required: false,
    type: () => VehicleUpdateManyWithoutPeopleInput,
  })
  @ValidateNested()
  @Type(() => VehicleUpdateManyWithoutPeopleInput)
  @IsOptional()
  @Field(() => VehicleUpdateManyWithoutPeopleInput, {
    nullable: true,
  })
  vehicles?: VehicleUpdateManyWithoutPeopleInput;
}

export { PersonUpdateInput as PersonUpdateInput };
