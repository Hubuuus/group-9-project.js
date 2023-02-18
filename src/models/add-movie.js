// // THIS FILE ADDS MOVIES TO WATCHED LIST OR TO QUEUE
// // USING LOCAL STORAGE

// const btnWatch = document.querySelector('.Modal__Button--Watched');
// // console.log('🚀 ~ btnWatch', btnWatch);
// const btnQueue = document.querySelector('.Modal__Button--Queue');
// const gallery = document.querySelector('.gallery');

// function addMovieToWatched() {
//   const createdDiv = document.createElement('div');
//   gallery.appendChild(createdDiv);
//   createdDiv.innerHTML = 'created div ';
//   localStorage.setItem('testDiv', createdDiv.outerHTML);
//   console.log('div added to local storage');
// }
// // btnWatch.addEventListener('click', addMovieToWatched);
// // // localStorage.clear();

import axios from "axios";
import { addMovie, btnWatchedLib, gallery } from "./modal-movie";

const btnWatchedLib = document.querySelector('[data-library="watched"]');
const btnQueueLib = document.querySelector('[data-library="queue"]');

const activeFetchLib = async e => {
  e.preventDefault();
  if (gallery.innerHTML !== "") gallery.innerHTML = "";
  fetchItems()
    .then(items => showAddedMovies(items))
    .catch(error => {
      console.log(error);
    });
};

const apiKey = "28e7de8a02a020e11a900cecedfaedb8";

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
        console.log("Error: ", error);
  };
};

function showAddedMovies(movie, genresName) {
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
};

btnWatchedLib.addEventListener('click', activeFetchLib);