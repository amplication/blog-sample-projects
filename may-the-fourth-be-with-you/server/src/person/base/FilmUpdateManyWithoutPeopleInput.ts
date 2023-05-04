/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FilmWhereUniqueInput } from "../../film/base/FilmWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FilmUpdateManyWithoutPeopleInput {
  @Field(() => [FilmWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FilmWhereUniqueInput],
  })
  connect?: Array<FilmWhereUniqueInput>;

  @Field(() => [FilmWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FilmWhereUniqueInput],
  })
  disconnect?: Array<FilmWhereUniqueInput>;

  @Field(() => [FilmWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FilmWhereUniqueInput],
  })
  set?: Array<FilmWhereUniqueInput>;
}

export { FilmUpdateManyWithoutPeopleInput as FilmUpdateManyWithoutPeopleInput };
