
const BACE_URL = 'https://pixabay.com/api/';
const API_KEY = '24011003-4a9e2bf62a6e3281e228c94d5';

// const BACE_URL = 'https://pixabay.com/api/';
// const API_KEY = '24011003-4a9e2bf62a6e3281e228c94d5';

//const url = `${BACE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${serching}&per_page=12&key=${API_KEY}`;


export default class SerchGalari {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchGalari() {

    const url = `${BACE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    return fetch(url)  //options
    .then(response => response.json());
    this.incrementPage();
        //return fetch(url)
        //.then(r => r.json())
        //.then(data => {
        // console.log(data);
        // this.incrimentPage();
        // return data.articles;
        //  });
      
    
  };   

     
        get query() {
          return this.searchQuery;
        }

        set query(newQuery) { 
        this.searchQuery = newQuery;
        }
            incrementPage() {
        this.page += 1;
         };
         resetPage() {
        this.page = 1;
        };
}




///=============
// export default class SerchGalari {
//   constructor() {
//   this.searchQuery = '';
//   this.page = 1;
// }
//   async fetchGalari() {
    
//     const url = `${BACE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
//         const response = await fetch(url);
//         const searchQuery = await response.json();
//         const searchImage = searchQuery.hits;
//         this.incrementPage();
//         return searchImage;
      
//     }
//     get query() {
//       return this.searchQuery;
//     }
//     set query(newQuery) { 
//       this.searchQuery = newQuery;
//     }
//     incrementPage() {
//       this.page += 1;
//     };
//     resetPage() {
//       this.page = 1;
//     };
//   }
  

