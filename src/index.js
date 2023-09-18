// import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
// import { fetchCats } from './js/fetchCats';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_nfVcZwyyyIPAqha4crBQHfYpwEa0J5NMjeMDQ8GGeyy3ZHdLf1xkNdEvEtuvGrTt'

// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_nfVcZwyyyIPAqha4crBQHfYpwEa0J5NMjeMDQ8GGeyy3ZHdLf1xkNdEvEtuvGrTt";

const DEBOUNCE_DELAY = 300;

const catInfo = document.querySelector('.cat-info');
const searchBox = document.querySelector('#search-box');
const breedSelect = document.querySelector('.breed-select')
const body = document.querySelector('body');

catInfo.style.visibility = 'hidden';

searchBox.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

const onInputSearch = (e) => {
    e.preventDefault();
    const endpoint = BASE_URL + '/breeds'

    const searchCats = e.target.value.trim();

    const params = new URLSearchParams({
        k: API_KEY,
    });

    console.log(params.toString())
};















// const countriesList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');
// const searchBox = document.querySelector('#search-box');
// const body = document.querySelector('body');

// body.style.backgroundImage =
//   'radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% )';
// countriesList.style.visibility = 'hidden';
// countryInfo.style.visibility = 'hidden';

// searchBox.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));


// function onInputSearch(e) {
//     e.preventDefault();

//     const searchCountries = e.target.value.trim();

//     if (!searchCountries) {
//         countriesList.style.visibility = "hidden";
//         countryInfo.style.visibility = "hidden";
//         countriesList.innerHTML = '';
//         countryInfo.innerHTML = '';
//         return;
//     }

//     fetchCountries(searchCountries)
//         .then(result => {
//             if (result.length > 10) {
//                 Notify.info('Too many matches found. Please, enter a more specific name.');
//                 return;
//             }
//             renderedCountries(result);
//         })
//         .catch(error => {
//             countriesList.innerHTML = '';
//             countryInfo.innerHTML = '';
//             Notify.failure('Oops, there is no country with that name');
//         })
// };

// function renderedCountries(result) {
//     const inputLetters = result.length;

//     if (inputLetters === 1) {
//         countriesList.innerHTML = '';
//         countriesList.style.visibility = "hidden";
//         countryInfo.style.visibility = "visible";
//         countryCardMarkup(result);
//     }

//     if (inputLetters > 1 && inputLetters <= 10) {
//         countryInfo.innerHTML = '';
//         countryInfo.style.visibility = "hidden";
//         countriesList.style.visibility = "visible";
//         countriesListMarkup(result);
//     }
// }

// function countriesListMarkup(result) {
//     const listMarkup = result.map((({ name, flags }) => {
//         return /*html*/ `<li>
//                         <img src="${flags.svg}" alt="${name}" width="60" height="auto">
//                         <span>${name.official}</span>
//                 </li>`;
//     })).join('');
//     countriesList.innerHTML = listMarkup;
//     return listMarkup;
// }

// function countryCardMarkup(result) {
//     const cardMarkup = result.map(({ flags, name, capital, population, languages }) => {
//         languages = Object.values(languages).join(", ");
//         return /*html*/ `
//             <img src="${flags.svg}" alt="${name}" width="320" height="auto">
//             <p> ${name.official}</p>
//             <p>Capital: <span> ${capital}</span></p>
//             <p>Population: <span> ${population}</span></p>
//             <p>Languages: <span> ${languages}</span></p>`;
//     }).join('');
//     countryInfo.innerHTML = cardMarkup;
//     return cardMarkup;
// }