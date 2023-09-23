import axios from 'axios';

axios.defaults.headers.common["x-api-key"] = "live_VXjg3dwWvByO6dkmwTLmDX4EbYgpNoqo8zYVcWpGYIEyu94h0uGwt2XkPHhjjofn";
// const API_KEY = "live_nfVcZwyyyIPAqha4crBQHfYpwEa0J5NMjeMtDQ8GGeyy3ZHdLf1xkNdEvEtuvGrT";
const BASE_URL = 'https://api.thecatapi.com/v1';
const SEARCH_URL = `https://api.thecatapi.com/v1/images/search`;

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`);
}

export function fetchCatByBreed(breedId) {
  return axios.get(`${SEARCH_URL}?breed_ids=${breedId}`);
}

// export { fetchBreeds, fetchCatByBreed };