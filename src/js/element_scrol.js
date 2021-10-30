

import { debounce, delay } from 'lodash';
import { error, notice } from '@pnotify/core';


import '../sass/_example.scss';
import '../sass/main.scss';

import cartFotoConteinerTpl from '../templates/icons.hbs';

  
import refs from './refs' ;

const {gallerySerchForm, galleryConteiner, loadMore} = refs ;

import SerchGalari from './apiService';
const serchGalari = new SerchGalari();



gallerySerchForm.addEventListener('input', debounce(onSearhe, 2000));
loadMore.addEventListener('click', loadMoreClick);


function onSearhe(e) {
  e.preventDefault();
  cleerArticlesConteiner();
    // const form = e.currentTarget; 
  serchGalari.query = e.target.value;

  serchGalari. fetchGalari();
  // serchGalari.page = serchGalari.page + 1;
  serchGalari.resetPage();
 console.log(e.target.value);
  serchGalari
  .fetchGalari()
  .then(showData)
  .catch(console.log(e));
    
//elements.query.       // .trim()

 }

function showData(array) {
 
      galleryConteiner.innerHTML = cartFotoConteinerTpl(array.hits);
  
  console.log(array.hits);
}

function loadMoreClick() {
  serchGalari.fetchGalari();

}
function cleerArticlesConteiner() {
  galleryConteiner.innerHTML = '';
}



// serchGalari
//     loadMore = document.getElementById('.loadMoreClick');
// serchGalari.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });



//================
