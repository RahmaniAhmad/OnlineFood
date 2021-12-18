import axios from "axios";

const apiEndpoint = "https://api.punkapi.com/v2/beers";
export async function callFetchAllApi(perPage: number, currentPage: number) {
  return await axios.get(`${apiEndpoint}`);
}

export function callFetchById(id: number) {
  return axios.get(`${apiEndpoint}/${id}`);
}
