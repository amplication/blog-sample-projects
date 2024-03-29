/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RaceWhereInput } from "./RaceWhereInput";
import { Type } from "class-transformer";
import { RaceOrderByInput } from "./RaceOrderByInput";

@ArgsType()
class RaceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RaceWhereInput,
  })
  @Field(() => RaceWhereInput, { nullable: true })
  @Type(() => RaceWhereInput)
  where?: RaceWhereInput;

  @ApiProperty({
    required: false,
    type: [RaceOrderByInput],
  })
  @Field(() => [RaceOrderByInput], { nullable: true })
  @Type(() => RaceOrderByInput)
  orderBy?: Array<RaceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RaceFindManyArgs as RaceFindManyArgs };
