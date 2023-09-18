const BASE_URL = 'https://api.thecatapi.com/v1/breeds/';
const searchParams = new URLSearchParams({
    fields: 'name,capital,population,flags,languages,',
});




// const BASE_URL = 'https://restcountries.com/v3.1/name/';
// const searchParams = new URLSearchParams({
//     fields: 'name,capital,population,flags,languages,',
// });

// export const fetchCountries = (name) => {
//     return fetch(`${BASE_URL}${name}?${searchParams}`)
//         .then(response => {
//             if (response.status === 404) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });
// };