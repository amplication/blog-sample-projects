/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RaceWhereUniqueInput } from "../../race/base/RaceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RaceUpdateManyWithoutFilmsInput {
  @Field(() => [RaceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RaceWhereUniqueInput],
  })
  connect?: Array<RaceWhereUniqueInput>;

  @Field(() => [RaceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RaceWhereUniqueInput],
  })
  disconnect?: Array<RaceWhereUniqueInput>;

  @Field(() => [RaceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RaceWhereUniqueInput],
  })
  set?: Array<RaceWhereUniqueInput>;
}

export { RaceUpdateManyWithoutFilmsInput as RaceUpdateManyWithoutFilmsInput };
