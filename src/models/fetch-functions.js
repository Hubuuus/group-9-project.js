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
import loader from './loaderSpinner';
import { Loading, Notify } from 'notiflix';

const gallery = document.querySelector('.Gallery');
const DEBOUNCE_DELAY = 1000;
const API_KEY = '28e7de8a02a020e11a900cecedfaedb8';
const BASE_URL = 'https://api.themoviedb.org/3/';
const inputMovie = document.querySelector('.SearchInput');
const alert = document.querySelector('[data-header="alert"]');
const nextButton = document.getElementById('Next-Button');
const prevButton = document.getElementById('Prev-Button');

const paginationNumbers = document.getElementById('Pagination-Numbers');

let currentPage = 1;
let pageEnd = 100;
// let page = 1;

export function clearGallery() {
  gallery.innerHTML = '';
}

// disable pagination on My Library
const myLibrary = document.querySelector('.NavPageMyLibrary');
const paginationContainer = document.querySelector('.Pagination-Container');
myLibrary.addEventListener('click', () => {
  paginationContainer.classList.add('hidden');
});

//Disable Page Navigation Buttons
const disableButton = button => {
  button.classList.add('Disabled');
  button.setAttribute('Disabled', true);
};
const enableButton = button => {
  button.classList.remove('Disabled');
  button.removeAttribute('Disabled');
};

const handlePageButtonsStatus = (page, pageCount) => {
  if (page === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (page === pageCount) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

//set active page number
const handleActivePageNumber = page => {
  document.querySelectorAll('.Nr-Button').forEach(button => {
    button.classList.remove('Pagination-Btn--Active');
  });

  document.querySelectorAll('.Nr-Button').forEach(button => {
    const pageIndex = Number(button.textContent);
    if (pageIndex == page) {
      button.classList.add('Pagination-Btn--Active');
    }
  });
};
// hubert's set active page number
// const updateActivePage = () => {
//   const buttons = document.querySelectorAll('.Pagination-Numbers .Nr-Button');
//   buttons.forEach(button => {
//     const pageNumber = parseInt(button.innerHTML);
//     if (pageNumber === currentPage) {
//       button.classList.add('active');
//     } else {
//       button.classList.remove('active');
//     }
//   });
// };

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
  const isActive = number === currentPage ? 'Pagination-Btn--Active' : '';

  paginationNumbers.insertAdjacentHTML(
    'beforeend',
    `
      <button class="Pagination-Btn Nr-Button ${isActive}" id="Nr-Button" >
      ${number}
      </button>
    `
  );
};

//GENERATE NUMBERS IN DIV MAIN
const getPagination = (page, pageCount) => {
  paginationNumbers.innerHTML = '';
  if (window.innerWidth < 768) {
    if (pageCount >= 5) {
      if (page <= 3) {
        for (let i = 1; i <= 4; i++) {
          getNumbers(i);
        }
        getDots();
        getNumbers(pageCount);
      } else if (page >= pageCount - 5) {
        getNumbers(1);
        getDots();
        for (let i = pageCount - 6; i <= pageCount; i++) {
          getNumbers(i);
        }
      } else {
        getNumbers(1);
        getDots();
        for (let i = page - 1; i <= page + 1; i++) {
          getNumbers(i);
        }
        getDots();
        getNumbers(pageCount);
      }
    } else if (pageCount < 9) {
      for (let i = 1; i <= pageCount; i++) {
        getNumbers(i);
      }
    }



  } else {
    if (pageCount >= 9) {
      if (page <= 5) {
        for (let i = 1; i <= 7; i++) {
          getNumbers(i);
        }
        getDots();
        getNumbers(pageCount);
      } 
      else if 
      (page > pageCount - 5) {
        getNumbers(1);
        getDots();
        for (let i = pageCount - 6; i <= pageCount; i++) {
          getNumbers(i);
        }
      }
       else 
       {
        getNumbers(1);
        getDots();
        for (let i = page - 2; i <= page + 2; i++) {
          getNumbers(i);
        }
        getDots();
        getNumbers(pageCount);
      }
    } else if (pageCount < 7) {
      for (let i = 1; i <= pageCount; i++) {
        getNumbers(i);
      }
    }
  }
};

window.addEventListener('load', () => {
  handlePageButtonsStatus(1);
  getPagination(1, pageEnd);
  handleActivePageNumber(currentPage);

  nextButton.addEventListener('click', event => {
    event.preventDefault();
    currentPage++;
    presentMovies(currentPage);
    handlePageButtonsStatus(currentPage);
    getPagination(currentPage);
    handleActivePageNumber(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  prevButton.addEventListener('click', event => {
    event.preventDefault();
    currentPage--;
    presentMovies(currentPage);
    handlePageButtonsStatus(currentPage);
    getPagination(currentPage);
    handleActivePageNumber(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  paginationNumbers.addEventListener('click', event => {
    if (event.target.classList.contains('Nr-Button')) {
      const pageIndex = Number(event.target.textContent);
      if (pageIndex !== currentPage) {
        currentPage = pageIndex;
        if (inputMovie.value !== '') {
          console.log('inputxxx');
          fetchSearchedMovies(title, currentPage);
        } else {
          presentMovies(currentPage);
          handlePageButtonsStatus(currentPage);
          getPagination(currentPage);
          handleActivePageNumber(currentPage);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  });
});

// FUNCTION AUTOMATICALLY FETCHING MOST POPULAR MOVIES
export const fetchPopularMovies = async page => {
  const urlPopularMovies = 'https://api.themoviedb.org/3/trending/movie/day';
  loader();
  // Loading.add();
  const response = await axios
    .get(urlPopularMovies, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    })
    .then(function (response) {
      // RENDER PAGINATION WITH TOTAL RESPONSES / 10
      const totalPages = response.data.total_pages / 10;
      getPagination(currentPage, totalPages);
      handlePageButtonsStatus(currentPage, totalPages);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
  Loading.remove(500);
  return response;
};

// OFF ENTER KEY
inputMovie.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
});

let title = '';

//EVENT LISTENING TO SEARCHBAR INPUT
inputMovie.addEventListener(
  'input',
  debounce(async event => {
    event.preventDefault();
    if (inputMovie.value == '') {
      return location.reload();
    } else {
      title = event.target.value.trim();
      console.log('title', title);
      currentPage = 1;
      fetchSearchedMovies(title);
      return title;
    }
  }, DEBOUNCE_DELAY)
);

// FUNCTION FETCHIN MOVIES BY QUERY
// deleted from argument pageNumber
export const fetchSearchedMovies = async (input, page) => {
  const urlSearchedMovies = 'https://api.themoviedb.org/3/search/movie';
  loader();

  const response = await axios
    .get(urlSearchedMovies, {
      params: {
        api_key: API_KEY,
        query: input,
        page: page,
      },
    })
    .then(response => {
      if (currentPage === 1) {
        Notify.success(`We found ${response.data.total_results} movies!`);
      }
      // loader();
      let pageCount = 0;
      if (response.data.total_results % 20 === 0) {
        pageCount = response.data.total_results / 20;
      } else {
        pageCount = Math.ceil(response.data.total_results / 20);
      }
      galleryOfMovies(response);
      getPagination(currentPage, pageCount);
      handlePageButtonsStatus(currentPage, pageCount);

      // console.log("wynij", response.data.total_results);
      alert.classList.add('hidden');
      if (response.data.results.length === 0) {
        alert.classList.remove('hidden');
      }
      // Loading.remove();

      return response;
    })
    .catch(() => {
      console.log('error');
    });
  Loading.remove(500);
  Notify.info(`We found ${response.data.total_results} movies!`);

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
            <span class="MovieCardTitle dark-mode">${movie.title}
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
