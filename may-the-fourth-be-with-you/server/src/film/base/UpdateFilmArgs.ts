/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { FilmWhereUniqueInput } from "./FilmWhereUniqueInput";
import { FilmUpdateInput } from "./FilmUpdateInput";

@ArgsType()
class UpdateFilmArgs {
  @Field(() => FilmWhereUniqueInput, { nullable: false })
  where!: FilmWhereUniqueInput;
  @Field(() => FilmUpdateInput, { nullable: false })
  data!: FilmUpdateInput;
}

export { UpdateFilmArgs as UpdateFilmArgs };
