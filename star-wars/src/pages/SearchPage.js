import React, { useState, useEffect } from "react";
import { fetchEntitiesByQuery } from "../services/fetchAPI";
import EntitiesList from "../components/EntitiesList/EntitiesList";
import { getDataFromQuery } from "../services/helpers";
import { withRouter } from "react-router-dom";

const SearchPage = props => {
  const { location } = props;
  const [queryEnts, setQueryEnts] = useState([]);

  const qObj = getDataFromQuery(location);

  const categories =
    Object.keys(qObj).length > 1 && qObj.categories.split("").includes(",")
      ? qObj.categories.split(",")
      : [qObj.categories];
  const query = qObj.q;

  useEffect(() => {
    setQueryEnts([]);

    [...categories].map(category =>
      fetchEntitiesByQuery(category, query).then(res => {
        const arr = res;
        setQueryEnts(prev => [...prev, ...arr]);
      })
    );
  }, [query]);

  return (
    <div>
      <h3>
        <p>Searched next:</p>
      </h3>
      <EntitiesList entitiesArr={queryEnts} />
    </div>
  );
};

export default withRouter(SearchPage);
