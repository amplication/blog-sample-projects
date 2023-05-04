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
import { PersonList } from "./person/PersonList";
import { PersonCreate } from "./person/PersonCreate";
import { PersonEdit } from "./person/PersonEdit";
import { PersonShow } from "./person/PersonShow";
import { StarshipList } from "./starship/StarshipList";
import { StarshipCreate } from "./starship/StarshipCreate";
import { StarshipEdit } from "./starship/StarshipEdit";
import { StarshipShow } from "./starship/StarshipShow";
import { VehicleList } from "./vehicle/VehicleList";
import { VehicleCreate } from "./vehicle/VehicleCreate";
import { VehicleEdit } from "./vehicle/VehicleEdit";
import { VehicleShow } from "./vehicle/VehicleShow";
import { RaceList } from "./race/RaceList";
import { RaceCreate } from "./race/RaceCreate";
import { RaceEdit } from "./race/RaceEdit";
import { RaceShow } from "./race/RaceShow";
import { PlanetList } from "./planet/PlanetList";
import { PlanetCreate } from "./planet/PlanetCreate";
import { PlanetEdit } from "./planet/PlanetEdit";
import { PlanetShow } from "./planet/PlanetShow";
import { FilmList } from "./film/FilmList";
import { FilmCreate } from "./film/FilmCreate";
import { FilmEdit } from "./film/FilmEdit";
import { FilmShow } from "./film/FilmShow";
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
        title={"Holocron"}
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
          name="Person"
          list={PersonList}
          edit={PersonEdit}
          create={PersonCreate}
          show={PersonShow}
        />
        <Resource
          name="Starship"
          list={StarshipList}
          edit={StarshipEdit}
          create={StarshipCreate}
          show={StarshipShow}
        />
        <Resource
          name="Vehicle"
          list={VehicleList}
          edit={VehicleEdit}
          create={VehicleCreate}
          show={VehicleShow}
        />
        <Resource
          name="Race"
          list={RaceList}
          edit={RaceEdit}
          create={RaceCreate}
          show={RaceShow}
        />
        <Resource
          name="Planet"
          list={PlanetList}
          edit={PlanetEdit}
          create={PlanetCreate}
          show={PlanetShow}
        />
        <Resource
          name="Film"
          list={FilmList}
          edit={FilmEdit}
          create={FilmCreate}
          show={FilmShow}
        />
      </Admin>
    </div>
  );
};

export default App;
