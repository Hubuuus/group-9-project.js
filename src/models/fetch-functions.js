import axios from 'axios';
import { presentMovies } from './present-movies';
import debounce from 'lodash.debounce';
import { namesGenres } from './genresid-name';

const DEBOUNCE_DELAY = 500;
const API_KEY = '28e7de8a02a020e11a900cecedfaedb8';

const BASE_URL = 'https://api.themoviedb.org/3/';

export const gallery = document.querySelector('.Gallery');
const inputMovie = document.querySelector('.SearchInput');

let page = 1;

inputMovie.addEventListener('input', debounce( async event => {
  event.preventDefault();

  // const title = event.target.value.trim();
  const title = inputMovie.value.trim();

  fetchSearchedMovies(title);
}, DEBOUNCE_DELAY));


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
    .catch((error) => {
      console.log(error);
    });

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
    createCards(searched, genres);
  });

  function createCards(movie, genres) {
    console.log('wynik;', movie, genres);
    movie.map(item => {
      const genresName = namesGenres(movie.genre_ids, genres);
      console.log('firstGenres:', genresName);
      // const genresName = mapGenreIdsToName(item.genres_ids, genres);
      movieCard(item, genresName);
    });
  }

}



function movieCard(movie, genresName) {
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
           "${genresName}" | ${movie.release_date.slice(0,4)}
          </p>
        </div>
      </div>`
  );
}

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
      // console.log('response', response);
      // console.log('results', response.data.results);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};

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