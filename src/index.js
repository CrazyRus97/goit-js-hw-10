import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import debounce from 'lodash.debounce';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createMarkup, createMarkupCat } from './js/markup';


const DEBOUNCE_DELAY = 300;

const catInfo = document.querySelector('.cat-info');
const breedSelect = document.querySelector('.breed-select');

const errorMessage = document.querySelector('.error');
const loaderMessage = document.querySelector('.loader');

//catInfo.style.visibility = 'hidden';
errorMessage.style.visibility = 'hidden';
loaderMessage.style.visibility = 'hidden';

breedSelect.addEventListener('change', onInputSearch);

fetchBreeds()
  .then(arr => {
    breedSelect.innerHTML = '<option value= "" selected disabled>Choose your cat</option> ';
    return (breedSelect.innerHTML += createMarkup(arr.data));
  })
//   .then(() => slim())
  .catch(fetchError);

function onInputSearch(e) {
    e.preventDefault();

    const searchCats = e.target.value;

    fetchCatByBreed(searchCats)
      .then(obj => {
        load()
        return (catInfo.innerHTML = createMarkupCat(obj.data));
    })
      .catch(fetchError);
};

function fetchError() {
  Report.failure(errorMessage.textContent, '');
}
function success() {
  Notify.success('Search was successful!)', '');
}
function load() {
  loaderMessage.style.visibility = 'visible'
}
function slim() {
  new SlimSelect({
    select: breedSelect,
  });
}



// const ref = {
//     selector: document.querySelector('.breed-select'),
//     divCatInfo: document.querySelector('.cat-info'),
//     loader: document.querySelector('.loader'),
//     error: document.querySelector('.error'),
// };
// const { selector, divCatInfo, loader, error } = ref;
// loader.classList.replace('loader', 'is-hidden');
// error.classList.add('is-hidden');
// divCatInfo.classList.add('is-hidden');
// let arrBreedsId = [];

// fetchBreeds()
// .then(data => {
//     data.forEach(element => {
//         arrBreedsId.push({text: element.name, value: element.id});
//     });
//     new SlimSelect({
//         select: selector,
//         data: arrBreedsId
//     });
//     })
// .catch(onFetchError);
// selector.addEventListener('change', onSelectBreed);

// function onSelectBreed(event) {
//     loader.classList.replace('is-hidden', 'loader');
//     selector.classList.add('is-hidden');
//     divCatInfo.classList.add('is-hidden');
//     const breedId = event.currentTarget.value;
//     fetchCatByBreed(breedId)
//     .then(data => {
//         loader.classList.replace('loader', 'is-hidden');
//         selector.classList.remove('is-hidden');
//         const { url, breeds } = data[0];
//         divCatInfo.innerHTML = `<div class="box-img"><img src="${url}" alt="${breeds[0].name}" width="400"/></div><div class="box"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`
//         divCatInfo.classList.remove('is-hidden');
//     })
//     .catch(onFetchError);
// };

// function onFetchError(error) {
//     selector.classList.remove('is-hidden');
//     loader.classList.replace('loader', 'is-hidden');
//     Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
//         position: 'center-center',
//         timeout: 5000,
//         width: '400px',
//         fontSize: '24px'
//     });
// };











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