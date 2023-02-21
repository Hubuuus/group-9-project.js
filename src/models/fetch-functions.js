/*
ŚCIEŻKA DZIAŁANIA PLIKUÓW JS PRZY POBIERNIU TYTUŁÓW FILMÓW Z API
1. POPULARNE FILMY
  - presentMovies() -> getGenres() -> fetchPopularMovies()
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
import { getPaginationNumbers, setCurrentPage } from './pagination';

const gallery = document.querySelector('.Gallery');
const DEBOUNCE_DELAY = 1000;
const API_KEY = '28e7de8a02a020e11a900cecedfaedb8';
const BASE_URL = 'https://api.themoviedb.org/3/';
const inputMovie = document.querySelector('.SearchInput');
const alert = document.querySelector('[data-header="alert"]');
//edit hubert paginacja
const nextButton = document.getElementById('Next-Button');
const prevButton = document.getElementById('Prev-Button');
let nrButton = '';

const paginationNumbers = document.getElementById('Pagination-Numbers');
//edit hubert paginacja

// export function clearGallery() {
//   gallery.innerHTML = '';
// }

//edit hubert paginacja
let currentPage = 1;
const pageCount = 20;

//Disable Page Navigation Buttons
const disableButton = button => {
  button.classList.add('Disabled');
  button.setAttribute('Disabled', true);
};
const enableButton = button => {
  button.classList.remove('Disabled');
  button.removeAttribute('Disabled');
};
const handlePageButtonsStatus = currentPage => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const getDots = () => {
  paginationNumbers.insertAdjacentHTML(
    'beforeend',
    `
      <button class="Pagination-Btn Pagination-Btn__Dots" id="Nr-Button">
      ...
      </button>
    `
  );
};

const getNumbers = number => {
  paginationNumbers.insertAdjacentHTML(
    'beforeend',
    `
      <button class="Pagination-Btn Nr-Button" id="Nr-Button">
      ${number}
      </button>
    `
  );
};

//GENERATE NUMBERS IN DIV MAIN

const getPagination = () => {
  paginationNumbers.innerHTML = '';
  getNumbers(1);
  if (currentPage <= 5) {
    getNumbers(2);
    getNumbers(3);
    getNumbers(4);
    getNumbers(5);
    getDots();
  } else if (currentPage >= pageCount - 5) {
    getDots();
    getNumbers(pageCount - 4);
    getNumbers(pageCount - 3);
    getNumbers(pageCount - 2);
    getNumbers(pageCount - 1);
  } else {
    getDots();
    getNumbers(currentPage - 1);
    getNumbers(currentPage);
    getNumbers(currentPage + 1);
    getDots();
  }
  getNumbers(pageCount);
  // nrButton = document.querySelectorAll('.Pagination-Btn');
};

// const addClass = el => {
//   el.classList.add('Nr-Button');
// };

// const nrButton = document.querySelectorAll('.Pagination-Btn');

// addClass(nrButton);

handlePageButtonsStatus(currentPage);
getPagination(currentPage);

window.addEventListener('load', () => {
  // setCurrentPage(1);
  nextButton.addEventListener('click', event => {
    event.preventDefault();
    currentPage++;
    console.log('Activ page:', currentPage);
    presentMovies(currentPage);
    handlePageButtonsStatus(currentPage);
    getPagination(currentPage);
  });

  prevButton.addEventListener('click', event => {
    event.preventDefault();
    currentPage--;
    console.log('Activ page:', currentPage);
    presentMovies(currentPage);
    handlePageButtonsStatus(currentPage);
    getPagination(currentPage);
  });

  document.querySelectorAll('.Nr-Button').forEach(button => {
    const pageIndex = Number(button.textContent);
    if (pageIndex !== currentPage) {
      button.addEventListener('click', () => {
        currentPage = pageIndex;
        console.log(currentPage);
        presentMovies(currentPage);
        handlePageButtonsStatus(currentPage);
        getPagination(currentPage);
      });
    }
  });
});

//edit hubert paginacja

// FUNCTION AUTOMATICALLY FETCHING MOST POPULAR MOVIES
export const fetchPopularMovies = async page => {
  const urlPopularMovies = 'https://api.themoviedb.org/3/trending/movie/day';

  const response = await axios
    .get(urlPopularMovies, {
      params: {
        api_key: API_KEY,
        page: page,
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

// OFF ENTER KEY
inputMovie.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
});

//EVENT LISTENING TO SEARCHBAR INPUT
inputMovie.addEventListener(
  'input',
  debounce(async event => {
    event.preventDefault();
    if (inputMovie.value == '') {
      return location.reload();
    }

    const title = event.target.value.trim();

    fetchSearchedMovies(title, page);
  }, DEBOUNCE_DELAY)
);

// FUNCTION FETCHIN MOVIES BY QUERY
export const fetchSearchedMovies = async (input, pageNumber) => {
  const urlSearchedMovies = 'https://api.themoviedb.org/3/search/movie';

  const response = await axios
    .get(urlSearchedMovies, {
      params: {
        api_key: API_KEY,
        query: input,
        page: pageNumber,
      },
    })
    .then(response => {
      galleryOfMovies(response);
      // console.log('searched results:', response.data.results);
      //       alert.innerHTML = ``;
      // if (response.data.results.length === 0) {
      //   console.log("error");
      //   setInterval(alert.innerHTML = `Search result not successful. Enter the correct movie name and search
      //   again.`, 1000);
      // }
      alert.classList.add('hidden');
      if (response.data.results.length === 0) {
        alert.classList.remove('hidden');
      }
      return response;
    })
    .catch(() => {
      console.log('error');
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

function movieCard(movie, genresName) {
  let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  gallery.insertAdjacentHTML(
    'beforeend',
    ` <div class="MovieCard" id="${movie.id}">
        <img src="${poster}" <img class ="MoviePoster" src="${poster}" 
        onerror="this.src='https://ik.imagekit.io/paulinas/noTMDBposter.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676735394520'" 
        alt="${movie.title}" loading="lazy" /> 
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
  // movieCards.forEach(el => el.addEventListener('click', toggleHidden));
  // movieCards.forEach(el => el.addEventListener('click', e => activeFetch(e)));
}

document.addEventListener('DOMContentLoaded', presentMovies());
