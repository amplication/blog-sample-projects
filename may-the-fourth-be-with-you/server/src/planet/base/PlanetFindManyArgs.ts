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
import { PlanetWhereInput } from "./PlanetWhereInput";
import { Type } from "class-transformer";
import { PlanetOrderByInput } from "./PlanetOrderByInput";

@ArgsType()
class PlanetFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PlanetWhereInput,
  })
  @Field(() => PlanetWhereInput, { nullable: true })
  @Type(() => PlanetWhereInput)
  where?: PlanetWhereInput;

  @ApiProperty({
    required: false,
    type: [PlanetOrderByInput],
  })
  @Field(() => [PlanetOrderByInput], { nullable: true })
  @Type(() => PlanetOrderByInput)
  orderBy?: Array<PlanetOrderByInput>;

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

export { PlanetFindManyArgs as PlanetFindManyArgs };
