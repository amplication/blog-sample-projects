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
  IsNumber,
  IsOptional,
  IsInt,
  IsString,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { FilmCreateNestedManyWithoutRacesInput } from "./FilmCreateNestedManyWithoutRacesInput";
import { Type } from "class-transformer";
import { PersonCreateNestedManyWithoutRacesInput } from "./PersonCreateNestedManyWithoutRacesInput";

@InputType()
class RaceCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  averageHeight?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  averageLifespan?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  classification?: string | null;

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
  designation?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  eyeColors?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => FilmCreateNestedManyWithoutRacesInput,
  })
  @ValidateNested()
  @Type(() => FilmCreateNestedManyWithoutRacesInput)
  @IsOptional()
  @Field(() => FilmCreateNestedManyWithoutRacesInput, {
    nullable: true,
  })
  films?: FilmCreateNestedManyWithoutRacesInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  hairColors?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  language?: string | null;

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
    type: () => PersonCreateNestedManyWithoutRacesInput,
  })
  @ValidateNested()
  @Type(() => PersonCreateNestedManyWithoutRacesInput)
  @IsOptional()
  @Field(() => PersonCreateNestedManyWithoutRacesInput, {
    nullable: true,
  })
  person?: PersonCreateNestedManyWithoutRacesInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  skinColors?: InputJsonValue;
}

export { RaceCreateInput as RaceCreateInput };
