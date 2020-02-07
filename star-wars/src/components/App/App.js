import React from "react";
import { Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import StarWars from "../StarWars/StarWars";

const App = () => {
  return (
    <div className="App">
      <Route component={StarWars} />
    </div>
  );
};

export default App;
