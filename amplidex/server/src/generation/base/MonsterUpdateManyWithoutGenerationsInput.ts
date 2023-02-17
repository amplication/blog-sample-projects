/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MonsterWhereUniqueInput } from "../../monster/base/MonsterWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MonsterUpdateManyWithoutGenerationsInput {
  @Field(() => [MonsterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MonsterWhereUniqueInput],
  })
  connect?: Array<MonsterWhereUniqueInput>;

  @Field(() => [MonsterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MonsterWhereUniqueInput],
  })
  disconnect?: Array<MonsterWhereUniqueInput>;

  @Field(() => [MonsterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MonsterWhereUniqueInput],
  })
  set?: Array<MonsterWhereUniqueInput>;
}

export { MonsterUpdateManyWithoutGenerationsInput };
