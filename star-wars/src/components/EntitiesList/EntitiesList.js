import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import shortid from "shortid";
import {
  getCategoryFromUrl,
  sortEntitiesArr,
  getNameKey
} from "../../services/helpers";
import css from "./EntitiesList.module.css";

const EntitiesList = props => {
  const { entitiesArr, match } = props;

  return (
    <ul>
      {entitiesArr &&
        sortEntitiesArr(entitiesArr).map(entityObj => (
          <li className={css.list} key={shortid.generate()}>
            {entityObj && (
              <NavLink
                to={{
                  pathname: `/${getCategoryFromUrl(entityObj.url)}/${
                    entityObj[`${getNameKey(entityObj)}`]
                  }`,
                  match: {
                    url: entityObj.url,
                    route: match.path
                  }
                }}
              >
                {entityObj[`${getNameKey(entityObj)}`]}
              </NavLink>
            )}
          </li>
        ))}
    </ul>
  );
};

export default withRouter(EntitiesList);
