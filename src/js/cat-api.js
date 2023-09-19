import axios from 'axios';

axios.defaults.headers.common["x-api-key"] = "live_nfVcZwyyyIPAqha4crBQHfYpwEa0J5NMjeMtDQ8GGeyy3ZHdLf1xkNdEvEtuvGrT";
// const API_KEY = "live_nfVcZwyyyIPAqha4crBQHfYpwEa0J5NMjeMtDQ8GGeyy3ZHdLf1xkNdEvEtuvGrT";
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const SEARCH_URL = `https://api.thecatapi.com/v1/images/search`;

// export const fetchBreeds = () => {
//     return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
//         .then(response => {
//             if (response.status === 404) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });
// };

function fetchBreeds() {
  return axios.get(BASE_URL);
}

function fetchCatByBreed(breedId) {
  return axios.get(`${SEARCH_URL}?breed_ids=${breedId}`);
}

export { fetchBreeds, fetchCatByBreed };