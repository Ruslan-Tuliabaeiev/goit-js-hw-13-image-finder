

import { debounce, delay } from 'lodash';
import { error, notice } from '@pnotify/core';


import '../sass/_example.scss';
import '../sass/main.scss';

import cartFotoConteinerTpl from '../templates/icons.hbs';

  
import refs from './refs' ;

const {gallerySerchForm, galleryConteiner, loadMore} = refs ;

import SerchGalari from './apiService';
const serchGalari = new SerchGalari();



gallerySerchForm.addEventListener('submit', onSearhe);

loadMore.addEventListener('click', loadMoreClick);
   
//=====

loadMore.style.display = 'none';

function onSearhe(e) {
  e.preventDefault();
  // cleerArticlesConteiner();

  const form = e.currentTarget.elements.query.value;  //e.target.elements.query.value;
if (form.trim() === '') return 
  serchGalari.query = form;

cleerArticlesConteiner();
  
createMarcup();
e.currentTarget.reset();



loadMore.style.display = 'flex';
  
};




 function createMarcup() {
try {
     serchGalari.fetchGalari().then(hits => {
    const markup = cartFotoTpl(hits);
    listItemsCLas(markup);
    listItems() 
  });
} catch (error) {
  console.log(error);
}

    
}


function loadMoreClick() {
 createMarcup();
 
}



function listItems() {
 loadMore.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}


function listItemsCLas(hits) {
  galleryConteiner.insertAdjacentHTML('beforeend', hits);
}
function cartFotoTpl(hits) {
  return cartFotoConteinerTpl(hits);
}


function cleerArticlesConteiner() {
  refs.galleryConteiner.innerHTML = '';
}
//========


