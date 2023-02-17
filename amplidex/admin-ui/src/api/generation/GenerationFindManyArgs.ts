import { GenerationWhereInput } from "./GenerationWhereInput";
import { GenerationOrderByInput } from "./GenerationOrderByInput";

export type GenerationFindManyArgs = {
  where?: GenerationWhereInput;
  orderBy?: Array<GenerationOrderByInput>;
  skip?: number;
  take?: number;
};
