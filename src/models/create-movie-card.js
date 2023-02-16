import { activeFetch, toggleHidden } from "./modal-movie";

const gallery = document.querySelector('.Gallery');

export let movieId;

export function galleryCard(movie, genresName) {
  let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  gallery.insertAdjacentHTML(
    'beforeend',
    ` <div class="MovieCard" id="${movie.id}">
        <img src="${poster}" alt="${movie.title}" loading="lazy" /> 
        <div class="MovieCardInfo">
          <p class="MovieCardData">
            <span class="MovieCardTitle">${movie.title}
          </span>
           ${genresName.splice(0, 3).join(', ')} | ${movie.release_date.slice(0,4)}
          </p>
        </div>
      </div>`
  );
    const movieCards = document.querySelectorAll('.MovieCard');
    for (let movieCard of movieCards) {
      movieCard.addEventListener('click', function () {
        movieId = this.id;
        console.log("ID: " + movieId);
      });
    };
    movieCards.forEach(el => el.addEventListener('click', toggleHidden));
    movieCards.forEach(el => el.addEventListener('click', e => activeFetch(e)));
}