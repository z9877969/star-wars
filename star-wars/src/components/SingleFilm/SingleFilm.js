import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import EntitiesList from "../EntitiesList/EntitiesList";
import { getEntitiesArrFromUrl } from "../../services/helpers";
import Entity from "../Entity/Entity";

const SingleFilm = props => {
  const { entity, match } = props;
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getEntitiesArrFromUrl(entity.planets, setPlanets);
    getEntitiesArrFromUrl(entity.starships, setStarships);
  }, []);

  return (
    <div>
      <h2>
        <p>Star Wars:</p> <p>{entity.title}</p>
      </h2>
      <EntitiesList entitiesArr={planets} name="name" />
      <EntitiesList entitiesArr={starships} name="name" />
      <Entity entity={entity} match={match} />
    </div>
  );
};

export default withRouter(SingleFilm);
