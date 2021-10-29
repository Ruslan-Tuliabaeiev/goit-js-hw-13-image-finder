
import { delay } from 'lodash';
import { error, notice } from '@pnotify/core';


import '../sass/_example.scss';
import '../sass/main.scss';

import cartFotoConteinerTpl from '../templates/icons.hbs';
// import SerchGalariTpl from '../templates/masiv.hbs';
  
import refs from './refs' ;

const {gallerySerchForm, galleryConteiner} = refs ;

import SerchGalari from './apiService';
const serchGalari = new SerchGalari();

fetchFotoCart()
.then(renderCartFot)
.catch(error => console.log(error));

function fetchFotoCart() {

return fetch(url).then(response => {
return response.json();

    
})
}

function renderCartFot(cartFoto) {
const marcup = cartFotoConteinerTpl(cartFoto);
refs.galleryConteiner.innerHTML = marcup;
};

console.log(marcup);



fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    const merkup = cartFotoConteinerTpl(data);
    console.log(merkup);
});


// import SerchGalari from './apiService';
// const SerchGalari = new SerchGalari();
/////////

gallerySerchForm.addEventListener('input', debounce(onSearhe, 1000));
/////

function onSearhe(e) { 

    galleryConteiner.innerHTML = '';  
    SerchGalari.query = e.target.value;
    if (SerchGalari.query.length < 1 || SerchGalari === ' ') {
      return notice({
        text: 'Enter you query',
        delay:500,
      });
    }
    SerchGalari
    .fetchGalari()
    .then(showData)
    .catch(error => onFetchError())};
    
 function showData(array) {
   if (array.length > 10) {
     notice({
       title: 'notifaktion',
       text: 'too many ',
       delay: 1000,
 
     });
   }
   else if (array.length >= 3 && array.length <= 10){
    galleryConteiner.innerHTML = SerchGalariTpl(array);
   }
   else{
    galleryConteiner.innerHTML = cartFotoConteinerTpl(...array);
   }
 }
 
 
 function onFetchError() {
 error({
   text: `too many matches found . Please  enter a more specifikc Query!` ,
   title: `error `,
   delay: 1000,
 })
 };
 








///////////////

// fetchFotoCart()
// .then(renderCartFot)
// .catch(error => console.log(error));

// function fetchFotoCart() {

// return fetch(url).then(response => {
// return response.json();

    
// })
// }

// function renderCartFot(cartFoto) {
// const marcup = cartFotoConteinerTpl(cartFoto);
// refs.galleryConteiner.innerHTML = marcup;
// };









// fetch(url)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     const merkup = cartFotoConteinerTpl(data);
//     console.log(merkup);
// });







