import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createMarkup, createMarkupCat } from './js/markup';

const catInfo = document.querySelector('.cat-info');
const breedSelect = document.querySelector('.breed-select');

const errorMessage = document.querySelector('.error');
const loaderMessage = document.querySelector('.loader');

//catInfo.style.visibility = 'hidden';
errorMessage.style.visibility = 'hidden';
loaderMessage.style.visibility = 'hidden';

breedSelect.addEventListener('change', onInputSearch);

fetchBreeds()
  .then(array => {
    breedSelect.innerHTML = '<option value= "" selected disabled>Choose your cat</option> ';
    return (breedSelect.innerHTML += createMarkup(array.data));
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
  loaderMessage.style.visibility = 'hidden';
  errorMessage.style.visibility = 'visible';
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
