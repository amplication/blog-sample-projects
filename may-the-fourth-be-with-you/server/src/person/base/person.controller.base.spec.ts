import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PersonController } from "../person.controller";
import { PersonService } from "../person.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  birthYear: "exampleBirthYear",
  createdAt: new Date(),
  description: "exampleDescription",
  eyeColor: "exampleEyeColor",
  gender: "exampleGender",
  hairColor: "exampleHairColor",
  height: 42,
  id: "exampleId",
  mass: 42.42,
  name: "exampleName",
  skinColor: "exampleSkinColor",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  birthYear: "exampleBirthYear",
  createdAt: new Date(),
  description: "exampleDescription",
  eyeColor: "exampleEyeColor",
  gender: "exampleGender",
  hairColor: "exampleHairColor",
  height: 42,
  id: "exampleId",
  mass: 42.42,
  name: "exampleName",
  skinColor: "exampleSkinColor",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    birthYear: "exampleBirthYear",
    createdAt: new Date(),
    description: "exampleDescription",
    eyeColor: "exampleEyeColor",
    gender: "exampleGender",
    hairColor: "exampleHairColor",
    height: 42,
    id: "exampleId",
    mass: 42.42,
    name: "exampleName",
    skinColor: "exampleSkinColor",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  birthYear: "exampleBirthYear",
  createdAt: new Date(),
  description: "exampleDescription",
  eyeColor: "exampleEyeColor",
  gender: "exampleGender",
  hairColor: "exampleHairColor",
  height: 42,
  id: "exampleId",
  mass: 42.42,
  name: "exampleName",
  skinColor: "exampleSkinColor",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Person", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PersonService,
          useValue: service,
        },
      ],
      controllers: [PersonController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /people", async () => {
    await request(app.getHttpServer())
      .post("/people")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /people", async () => {
    await request(app.getHttpServer())
      .get("/people")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /people/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/people"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /people/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/people"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /people existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/people")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/people")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
