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
import { SealWhereInput } from "./SealWhereInput";
import { Type } from "class-transformer";
import { SealOrderByInput } from "./SealOrderByInput";

@ArgsType()
class SealFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SealWhereInput,
  })
  @Field(() => SealWhereInput, { nullable: true })
  @Type(() => SealWhereInput)
  where?: SealWhereInput;

  @ApiProperty({
    required: false,
    type: [SealOrderByInput],
  })
  @Field(() => [SealOrderByInput], { nullable: true })
  @Type(() => SealOrderByInput)
  orderBy?: Array<SealOrderByInput>;

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

export { SealFindManyArgs as SealFindManyArgs };
