import axios from 'axios';
import { presentMovies } from "./present-movies";
// import { galleryCard } from './create-movie-card';
import { debounce } from 'lodash';
import { createCards } from './create-gallery';


const DEBOUNCE_DELAY = 500;
const API_KEY = '28e7de8a02a020e11a900cecedfaedb8';

const BASE_URL = 'https://api.themoviedb.org/3/';

export const gallery = document.querySelector('.Gallery');
const inputMovie = document.querySelector('.SearchInput');
const searchMovie = document.querySelector('.SearchContainer');
const searchAlert = document.querySelector('.SearchAlert');
let page = 1;

// inputMovie.addEventListener('input', debounce( async event => {
//   event.preventDefault();

//   // const title = event.target.value.trim();
//   const title = inputMovie.value.trim();

//   fetchSearchedMovies(title);
// }, DEBOUNCE_DELAY));

// export const fetchSearchedMovies = async (input, page = 1) => {

//   const urlSearchedMovies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}&page=${page}`;

//   const response = await axios
//     .get(urlSearchedMovies)
//     .then((response) => {
//       galleryOfMovies(response);

//       // console.log(response);
//       return response;
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   console.log('Response', response);
//   return response;
// };

// export function clearGallery() {
//   gallery.innerHTML = '';
// }

// function galleryOfMovies(response) {
//   clearGallery();
//   // console.log('RRRR', response.data.results);
//   const searched = response.data.results;
//   getGenres().then(item => {
//     const genres = item;
//     createCards(searched, genres);
//   });

//   function createCards(movie, genres) {
//     movie.map(item => {
//       const genresName = nameOfGenres(movie, genres);
//       movieCard(item, genresName);
//     });
//   }

//   function nameOfGenres(movie, genres) {
//     return genres.reduce((accumulator, item) => {
//       if (movie.genre_ids.includes(item.id)) {
//         accumulator.push(item.name);
//       }
//       return accumulator;
//     }, []);
//   } 

// }



// function movieCard(movie, genresName) {
//   let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//   // let genresName =  nameOfGenres(movie, genres);
//   gallery.insertAdjacentHTML(
//     'beforeend',
//     ` <div class="MovieCard" id="${movie.id}">
//         <img src="${poster}" alt="${movie.title}" loading="lazy" /> 
//         <div class="MovieCardInfo">
//           <p class="MovieCardData">
//             <span class="MovieCardTitle">${movie.title}
//           </span>
//            "${genresName}" | ${movie.release_date.slice(0,4)}
//           </p>
//         </div>
//       </div>`
//   );
// }


searchMovie.addEventListener('submit', debounce( async event => {
  event.preventDefault();

  const title = inputMovie.value.trim();
  fetchSearchedMovies(title);
  try {
    return fetchSearchedMovies(title, page).then(item => {
      if (item.total_results === 0) {
        searchAlert.innerHTML = 'Search result not successful. Enter the correct movie name and ';
        
        gallery.innerHTML = '';
      }

      if (item.total_results > 0) {
        searchAlert.innerHTML = '';
      
        galleryOfMovies(item);

        // pagination{
        //   const nextPage = await fetchSearchedMovies(title, page);
        }
      });
    }
    catch (error){
    console.log(error);
  }}, DEBOUNCE_DELAY));

export const fetchSearchedMovies = async (input, page = 1) => {
  const urlSearchedMovies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}&page=${page}`;

  const response = await axios
  .get(urlSearchedMovies)
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log('Response', response);
return response;
};

function galleryOfMovies(response) {
  gallery.innerHTML = '';
  const searched = response.data.results;
  getGenres().then(item => {
    const genres = item;
    createCards(searched, genres);
  });
}


export const fetchPopularMovies = async () => {
  const urlPopularMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=1`;

  const response = await axios
    .get(urlPopularMovies)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};

export const getGenres = async () => {
  const urlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
 
  const response = await axios
    .get(urlGenres)
    .then(function (response) {
      return response.data.genres;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};

export const getDetails = async movie_id => {
  const urlInfo = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;

  const response = await axios
    .get(urlInfo)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};

document.addEventListener('DOMContentLoaded', presentMovies());