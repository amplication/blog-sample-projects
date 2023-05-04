/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { StarshipWhereUniqueInput } from "../../starship/base/StarshipWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class StarshipCreateNestedManyWithoutFilmsInput {
  @Field(() => [StarshipWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StarshipWhereUniqueInput],
  })
  connect?: Array<StarshipWhereUniqueInput>;
}

export { StarshipCreateNestedManyWithoutFilmsInput as StarshipCreateNestedManyWithoutFilmsInput };
