import axios from 'axios';
import { presentMovies } from './present-movies';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 500;
const API_KEY = '28e7de8a02a020e11a900cecedfaedb8';

const BASE_URL = 'https://api.themoviedb.org/3/';

export const gallery = document.querySelector('.Gallery');
const inputMovie = document.querySelector('.SearchInput');

let page = 1;

// EVENT LITENING TO SEARCHBAR INPUT
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

      // console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error);
    });

  console.log('Response', response);
  return response;
};

export function clearGallery() {
  gallery.innerHTML = '';
}

function galleryOfMovies(response) {
  clearGallery();
  // console.log('RRRR', response.data.results);
  const searched = response.data.results;
  getGenres().then(item => {
    const genres = item;
    createCards(searched);
  });

  function createCards(movie) {
    movie.map(item => {
      // const genresName = nameOfGenres(movie, genres);
      movieCard(item);
    });
  }
}

function movieCard(movie) {
  let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  // let genresName =  nameOfGenres(movie, genres);
  gallery.insertAdjacentHTML(
    'beforeend',
    ` <div class="MovieCard" id="${movie.id}">
        <img src="${poster}" alt="${movie.title}" loading="lazy" /> 
        <div class="MovieCardInfo">
          <p class="MovieCardData">
            <span class="MovieCardTitle">${movie.title}
          </span>
           "//$//{genresName}" | ${movie.release_date.slice(0, 4)}
          </p>
        </div>
      </div>`
  );
}
// SMALL FUNCTION CONVERTING RESPONSE INTO JSON
function fetchJsonResponse(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

// FUNCTION AUTOMATICALLY FETCHING MOST POPULAR MOVIES
export async function fetchPopularMovies() {
  const urlPopularMovies = 'https://api.themoviedb.org/3/trending/movie/day';

  const response = await axios
    .get(urlPopularMovies, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    })
    .then(function (response) {
      console.log('response', response);
      console.log('results', response.data.results);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
}

// FUNCTION GETTING GENRES FROM MOVIES
export async function getGenres() {
  const urlGenres = 'https://api.themoviedb.org/3/genre/movie/list';

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
}

// FUNCTION GETTING GENRES FROM MOVIES
export async function getDetails(movie_id) {
  const urlInfo = `https://api.themoviedb.org/3/movie/${movie_id}`;

  const response = await axios
    .get(urlInfo, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
}
// FUNCTION HANDLING PAGINATION DIV UNDER MOVIE GALLERY
function renderPaginator(count, selectedPage = 1, pageSize = 12) {
  const pages = Math.ceil(count / pageSize);
  const select = document.getElementById('Pagination-Select');
  select.innerHTML = '';

  for (let i = 1; i <= pages; i++) {
    const option = document.createElement('option');
    option.innerHTML = 'Page' + i;
    option.value = 1;
    if (i === Number(selectedPage)) {
      option.setAttribute('selected', true);
    }
    select.append(option);
  }
  select.addEventListener('change', event => {
    fetchJsonResponse(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${selectedPage}`
    ).then(response => {
      //rekurencja - wywoływanie funkcji wewnątrz siebie)
      renderPaginator(response.data.total_results, selectedPage);
      // presentMovies();
    });
  });
  renderPaginator(response.data.total_results);
}

// document.addEventListener('DOMContentLoaded', renderPaginator());
document.addEventListener('DOMContentLoaded', presentMovies());
