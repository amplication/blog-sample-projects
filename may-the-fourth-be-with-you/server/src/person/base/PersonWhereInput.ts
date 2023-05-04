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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { FilmListRelationFilter } from "../../film/base/FilmListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PlanetWhereUniqueInput } from "../../planet/base/PlanetWhereUniqueInput";
import { RaceListRelationFilter } from "../../race/base/RaceListRelationFilter";
import { StarshipListRelationFilter } from "../../starship/base/StarshipListRelationFilter";
import { VehicleListRelationFilter } from "../../vehicle/base/VehicleListRelationFilter";

@InputType()
class PersonWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  birthYear?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  eyeColor?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FilmListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FilmListRelationFilter)
  @IsOptional()
  @Field(() => FilmListRelationFilter, {
    nullable: true,
  })
  films?: FilmListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  gender?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  hairColor?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  height?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  mass?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

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
  planet?: PlanetWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => RaceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RaceListRelationFilter)
  @IsOptional()
  @Field(() => RaceListRelationFilter, {
    nullable: true,
  })
  races?: RaceListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  skinColor?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => StarshipListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StarshipListRelationFilter)
  @IsOptional()
  @Field(() => StarshipListRelationFilter, {
    nullable: true,
  })
  starships?: StarshipListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => VehicleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => VehicleListRelationFilter)
  @IsOptional()
  @Field(() => VehicleListRelationFilter, {
    nullable: true,
  })
  vehicles?: VehicleListRelationFilter;
}

export { PersonWhereInput as PersonWhereInput };