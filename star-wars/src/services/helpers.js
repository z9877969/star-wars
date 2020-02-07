import qs from "query-string";
import { fetchEntity } from "./fetchAPI";

export const getIdFromUrl = url => {
  const urlParseArr = Object.keys(qs.parse(url))[0].split("/");

  return urlParseArr[urlParseArr.length - 2];
};

export const getCategoryFromUrl = url => {
  const urlParseArr = Object.keys(qs.parse(url))[0].split("/");

  return urlParseArr[urlParseArr.length - 3];
};

export const getEntitiesArrFromUrl = (arrEntitiesUrl, stateFunc) => {
  arrEntitiesUrl.map(planetUrl =>
    fetchEntity(planetUrl).then(res => {
      const arr = [res.data];
      stateFunc(prev => [...prev, ...arr]);
    })
  );
};

export const getDataFromQuery = location => {
  const q = qs.parse(location.search);

  return q;
};

// args is arr [category, id] or [category]
export const getRoute = args =>
  [...args].reduce((acc, el) => acc + `/${el}`, "").trim();
