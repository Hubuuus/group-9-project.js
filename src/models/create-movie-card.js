import { activeFetch, toggleHidden } from "./modal-movie";

const gallery = document.querySelector('.gallery');

export let movieId;

export function galleryCard(movie, genresName) {
  let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  gallery.insertAdjacentHTML(
    'beforeend',
    ` <div class="movie-card" id="${movie.id}">
        <img src="${poster}" alt="${movie.title}" loading="lazy" /> 
        <div class="movie-card__info">
          <p class="movie-card__data">
            <span class="movie-card__title">${movie.title}
          </span>
           ${genresName} | ${movie.release_date.slice(0,4)}
          </p>
        </div>
      </div>`
  );
    const movieCards = document.querySelectorAll('.movie-card');
    for (let movieCard of movieCards) {
      movieCard.addEventListener('click', function () {
        movieId = this.id;
        console.log("ID: " + movieId);
      });
    };
    movieCards.forEach(el => el.addEventListener('click', toggleHidden));
    movieCards.forEach(el => el.addEventListener('click', e => activeFetch(e)));
}