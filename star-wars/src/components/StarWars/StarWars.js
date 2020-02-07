import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FilmsPage from "../../pages/FilmsPage";
import SingleFilmPage from "../../pages/SingleFilmPage";
import PlanetPage from "../../pages/PlanetPage";
import StarShipsPage from "../../pages/StarShipsPage";
import Input from "../SearchForm/SearchInpute";

const StarWars = () => (
  <div>
    <Input />
    <Switch>
      <Route path="/films" exact component={FilmsPage} />
      <Route path="/films/:id" exact component={SingleFilmPage} />
      <Route path="/planets/:id" exact component={PlanetPage} />
      <Route path="/starships/:id" exact component={StarShipsPage} />
      <Redirect to="/films" />
    </Switch>
  </div>
);

export default StarWars;
