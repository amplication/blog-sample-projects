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
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { GenerationWhereUniqueInput } from "../../generation/base/GenerationWhereUniqueInput";
import { Type } from "class-transformer";
import { TypingUpdateManyWithoutMonstersInput } from "./TypingUpdateManyWithoutMonstersInput";

@InputType()
class MonsterUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  biology?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  dexNumber?: number;

  @ApiProperty({
    required: false,
    type: () => GenerationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GenerationWhereUniqueInput)
  @IsOptional()
  @Field(() => GenerationWhereUniqueInput, {
    nullable: true,
  })
  generation?: GenerationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => TypingUpdateManyWithoutMonstersInput,
  })
  @ValidateNested()
  @Type(() => TypingUpdateManyWithoutMonstersInput)
  @IsOptional()
  @Field(() => TypingUpdateManyWithoutMonstersInput, {
    nullable: true,
  })
  typing?: TypingUpdateManyWithoutMonstersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string;
}

export { MonsterUpdateInput };
