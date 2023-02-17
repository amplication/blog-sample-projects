import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { GenerationList } from "./generation/GenerationList";
import { GenerationCreate } from "./generation/GenerationCreate";
import { GenerationEdit } from "./generation/GenerationEdit";
import { GenerationShow } from "./generation/GenerationShow";
import { MonsterList } from "./monster/MonsterList";
import { MonsterCreate } from "./monster/MonsterCreate";
import { MonsterEdit } from "./monster/MonsterEdit";
import { MonsterShow } from "./monster/MonsterShow";
import { TypingList } from "./typing/TypingList";
import { TypingCreate } from "./typing/TypingCreate";
import { TypingEdit } from "./typing/TypingEdit";
import { TypingShow } from "./typing/TypingShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Amplidex Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Generation"
          list={GenerationList}
          edit={GenerationEdit}
          create={GenerationCreate}
          show={GenerationShow}
        />
        <Resource
          name="Monster"
          list={MonsterList}
          edit={MonsterEdit}
          create={MonsterCreate}
          show={MonsterShow}
        />
        <Resource
          name="Typing"
          list={TypingList}
          edit={TypingEdit}
          create={TypingCreate}
          show={TypingShow}
        />
      </Admin>
    </div>
  );
};

export default App;
