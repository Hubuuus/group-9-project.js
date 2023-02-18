/*
ŚCIEŻKA DZIAŁANIA PLIKUÓW JS PRZY POBIERNIU TYTUŁÓW FILMÓW Z API
1. POPULARNE FILMY
  - presentMovies() -> getGenres() -> fetchPopularMovies() -> createCards
  - createCards() -> namesGenres() -> movieCard() -> html
2. WYSZUKIWANE FILMY
  - eventListener() -> fetchSearchedMovies() -> galleryOfMovies()
  -> getGenres() -> createCards() -> namesGenres() ->
  -> movieCard() -> html

*/
import axios from 'axios';
import { presentMovies } from './present-movies';
import debounce from 'lodash.debounce';
import { namesGenres } from './genresid-name';
import { activeFetch, toggleHidden } from './modal-movie';

let movieId;
const gallery = document.querySelector('.Gallery');
const DEBOUNCE_DELAY = 1000;
const API_KEY = '28e7de8a02a020e11a900cecedfaedb8';
const BASE_URL = 'https://api.themoviedb.org/3/';
const inputMovie = document.querySelector('.SearchInput');

export function clearGallery() {
  gallery.innerHTML = '';
}

// FUNCTION AUTOMATICALLY FETCHING MOST POPULAR MOVIES
export const fetchPopularMovies = async () => {
  const urlPopularMovies = 'https://api.themoviedb.org/3/trending/movie/day';

  const response = await axios
    .get(urlPopularMovies, {
      params: {
        api_key: API_KEY,
        // page: page,
      },
    })
    .then(function (response) {
      // console.log('popular:', response);
      // console.log('popular results:', response.data.results);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};

// EVENT LISTENING TO SEARCHBAR INPUT
inputMovie.addEventListener(
  'input',
  debounce(async event => {
    event.preventDefault();

    // const title = event.target.value.trim();
    const title = inputMovie.value.trim();

    fetchSearchedMovies(title);
  }, DEBOUNCE_DELAY)
);

// FUNCTION FETCHIN MOVIES BY QUERY
export const fetchSearchedMovies = async (input, page) => {
  const urlSearchedMovies = 'https://api.themoviedb.org/3/search/movie';

  const response = await axios
    .get(urlSearchedMovies, {
      params: {
        api_key: API_KEY,
        query: input,
        page: page,
      },
    })
    .then(response => {
      galleryOfMovies(response);

      // console.log('searched results:', response.data.results);
      return response;
    })
    .catch(error => {
      console.log(error);
    });

  return response;
};

function galleryOfMovies(response) {
  clearGallery();
  // console.log('RRRR', response.data.results);
  const searched = response.data.results;
  getGenres().then(item => {
    const genres = item;
    createCards(searched, genres);
  });
}

// FUNCTION GETTING GENRES FROM MOVIES
export const getGenres = async () => {
  const urlGenres = 'https://api.themoviedb.org/3/genre/movie/list';
  // const urlGenres = "https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

  const response = await axios
    .get(urlGenres, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(function (response) {
      return response.data.genres;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};

export function createCards(movie, genres) {
  // console.log('wynik;', movie, genres);
  // console.log('test movie:', movie[0].genre_ids);
  // console.log('test genre:', genres[0]);

  movie.map(movie => {
    const genresName = namesGenres(movie.genre_ids, genres);
    movieCard(movie, genresName);
  });
}

// export const getDetails = async movie_id => {
//   const urlInfo = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;

//   const response = await axios
//     .get(urlInfo)
//     .then(function (response) {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   return response;
// };

function movieCard(movie, genresName) {
  let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  gallery.insertAdjacentHTML(
    'beforeend',
    ` <div class="MovieCard" id="${movie.id}">
        <img src="${poster}" alt="${movie.title}" loading="lazy" /> 
        <div class="MovieCardInfo">
          <p class="MovieCardData">
            <span class="MovieCardTitle">${movie.title}
          </span>
           ${genresName.splice(0, 3).join(', ')} | ${movie.release_date.slice(
      0,
      4
    )}
          </p>
        </div>
      </div>`
  );
  const movieCards = document.querySelectorAll('.MovieCard');
  for (let movieCard of movieCards) {
    movieCard.addEventListener('click', function () {
      movieId = this.id;
      // console.log('ID: ' + movieId);
    });
  }
  movieCards.forEach(el => el.addEventListener('click', toggleHidden));
  movieCards.forEach(el => el.addEventListener('click', e => activeFetch(e)));
}

document.addEventListener('DOMContentLoaded', presentMovies());
