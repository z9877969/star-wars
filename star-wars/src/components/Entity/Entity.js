import React from "react";
import { getCategoryFromUrl } from "../../services/helpers";
import css from "./Entity.module.css";

const Entity = props => {
  const { entity } = props;
  const category = getCategoryFromUrl(entity.url);
  const entityName = category
    .split("")
    .filter((el, idx) => idx !== category.length - 1)
    .join("");

  return (
    <div className={css.container}>
      {entityName !== "film" && (
        <h2 className={css.title}>
          {entityName} {entity.name}
        </h2>
      )}
      <ul>
        {entity &&
          Object.entries(entity)
            .filter(el => {
              const [key, value] = el;
              return (
                key !== "name" &&
                key !== "films" &&
                key !== "url" &&
                value !== "unknown"
              );
            })
            .map(el => {
              const [key, value] = el;
              return (
                <li className={css.item} key={key}>
                  <p className={css.name}>{key}</p>
                  <p className={css.descr}>{value}</p>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default Entity;
