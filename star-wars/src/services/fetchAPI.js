import axios from "axios";

axios.defaults.baseURL = "https://swapi.co/api";

export const fetchEntities = entity => {
  return axios.get(`/${entity}`).then(res => res.data.results);
};

export const fetchEntity = url => {
  return axios.get(url);
};
