import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createMarkup, createMarkupCat } from './js/markup';

const catInfo = document.querySelector('.cat-info');
const breedSelect = document.querySelector('.breed-select');

const errorMessage = document.querySelector('.error');
const loaderMessage = document.querySelector('.loader');

errorMessage.style.visibility = 'hidden';
loaderMessage.style.visibility = 'hidden';
catInfo.style.visibility = 'hidden'

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

   const catID = e.target.value;

   fetchCatByBreed(catID)
     .then(obj => {
      console.log(obj.data)
      console.log(createMarkupCat(obj.data))
      load()
      catInfo.innerHTML = createMarkupCat(obj.data);
      
      
    })
    .then(() => success())
    .catch(fetchError);
};

function fetchError() {
  errorMessage.style.visibility = 'visible';
}
function success() {
  Notify.success('Success!', '');
  loaderMessage.style.visibility = 'hidden'
  catInfo.style.visibility = 'visible'
}
function load() {
  loaderMessage.style.visibility = 'visible'
}


// function slim() {
//   new SlimSelect({
//     select: breedSelect,
//   });
// }
