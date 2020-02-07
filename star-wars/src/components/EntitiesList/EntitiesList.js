import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import shortid from "shortid";
import { getCategoryFromUrl } from "../../services/helpers";
import css from "./EntitiesList.module.css";

const EntitiesList = props => {
  const { entitiesArr, name, match } = props;

  return (
    <ul>
      {entitiesArr &&
        entitiesArr
          .sort((a, b) => {
            if (a[`${name}`] > b[`${name}`]) {
              return 1;
            }
            if (a[`${name}`] < b[`${name}`]) {
              return -1;
            }
            return 0;
          })
          .map(entityObj => (
            <li className={css.list} key={shortid.generate()}>
              {entityObj && (
                <NavLink
                  to={{
                    pathname: `/${getCategoryFromUrl(entityObj.url)}/${
                      entityObj[`${name}`]
                    }`,
                    match: {
                      url: entityObj.url,
                      route: match.path
                    }
                  }}
                >
                  {entityObj[`${name}`]}
                </NavLink>
              )}
            </li>
          ))}
    </ul>
  );
};

export default withRouter(EntitiesList);
