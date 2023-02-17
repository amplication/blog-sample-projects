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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IntFilter } from "../../util/IntFilter";
import { GenerationWhereUniqueInput } from "../../generation/base/GenerationWhereUniqueInput";
import { TypingListRelationFilter } from "../../typing/base/TypingListRelationFilter";

@InputType()
class MonsterWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  biology?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  dexNumber?: IntFilter;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  image?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => TypingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TypingListRelationFilter)
  @IsOptional()
  @Field(() => TypingListRelationFilter, {
    nullable: true,
  })
  typing?: TypingListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  url?: StringFilter;
}

export { MonsterWhereInput };
