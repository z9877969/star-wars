import axios from "axios";

axios.defaults.baseURL = "https://swapi.co/api";

export const fetchEntities = entity => {
  return axios
    .get(`/${entity}`)
    .then(res => res.data.results)
    .catch(err => err);
};

export const fetchEntity = url => {
  return axios.get(url).catch(err => console.log(err));
};

export const fetchEntitiesByQuery = (category, query) => {
  const url = `/${category}/?search=${query}`;

  return axios
    .get(url)
    .then(res => res.data.results)
    .catch(err => console.log(err));
};
