import axios from 'axios';
import { gallery, addMovie, queueMovie } from './modal-movie';

const btnWatchedLib = document.querySelector('[data-library="watched"]');
const btnQueueLib = document.querySelector('[data-library="queue"]');
const loader = document.querySelector('.Pagination-Loader');

const activeFetchLibAdd = async e => {
  e.preventDefault();
  gallery.innerHTML = '';
  // if (gallery.innerHTML === "") loader.innerHTML = "LOADING MOVIES";

  const ids = addMovie; // przykładowe id filmów
  const fetchRequests = ids.map(id =>
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
  );

  if (gallery.innerHTML !== '') gallery.innerHTML = '';

  Promise.all(fetchRequests)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      data.forEach(item => showAddedMovies(item));
    })
    .catch(error => console.log(error));
};

const activeFetchLibQueue = async e => {
  e.preventDefault();
  gallery.innerHTML = '';
  //  if (gallery.innerHTML === "") loader.innerHTML = "LOADING MOVIES";

  const ids = queueMovie; // przykładowe id filmów
  const fetchRequests = ids.map(id =>
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
  );

  if (gallery.innerHTML !== '') gallery.innerHTML = '';

  Promise.all(fetchRequests)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      data.forEach(item => showAddedMovies(item));
    })
    .catch(error => console.log(error));
};

const apiKey = '28e7de8a02a020e11a900cecedfaedb8';

async function fetchItems() {
  const params = new URLSearchParams({
    api_key: apiKey,
  });

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${addMovie.join()}?${params}`
    );
    return response.data;
  } catch (error) {
    console.log('Error: ', error);
  }
}

function showAddedMovies(movie) {
  const genresName = movie.genres.map(genre => genre.name);
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  gallery.insertAdjacentHTML(
    'beforeend',
    ` <div class="MovieCard" id="${movie.id}">
        <img src="${poster}" alt="${movie.title}" loading="lazy" />
        <div class="MovieCardInfo">
          <p class="MovieCardData">
            <span class="MovieCardTitle">${movie.title}</span>
           ${genresName.splice(0, 3).join(', ')} | ${movie.release_date.slice(
      0,
      4
    )}
          </p>
        </div>
      </div>`
  );
  if (gallery.innerHTML !== '') loader.innerHTML = '';
}

window.addEventListener('load', activeFetchLibAdd);
btnWatchedLib.addEventListener('click', activeFetchLibAdd);
btnQueueLib.addEventListener('click', activeFetchLibQueue);
