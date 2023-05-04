/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsOptional,
  IsInt,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Person } from "../../person/base/Person";
import { Planet } from "../../planet/base/Planet";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Race } from "../../race/base/Race";
import { Starship } from "../../starship/base/Starship";
import { Vehicle } from "../../vehicle/base/Vehicle";

@ObjectType()
class Film {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  director!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  episodeId!: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  openingCrawl!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Person],
  })
  @ValidateNested()
  @Type(() => Person)
  @IsOptional()
  person?: Array<Person>;

  @ApiProperty({
    required: false,
    type: () => [Planet],
  })
  @ValidateNested()
  @Type(() => Planet)
  @IsOptional()
  planet?: Array<Planet>;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  producers!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => [Race],
  })
  @ValidateNested()
  @Type(() => Race)
  @IsOptional()
  race?: Array<Race>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  releaseDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [Starship],
  })
  @ValidateNested()
  @Type(() => Starship)
  @IsOptional()
  starship?: Array<Starship>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Vehicle],
  })
  @ValidateNested()
  @Type(() => Vehicle)
  @IsOptional()
  vehicle?: Array<Vehicle>;
}

export { Film as Film };
