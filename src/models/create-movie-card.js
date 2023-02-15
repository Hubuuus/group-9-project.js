import { gallery } from "./fetch-functions";

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
           ${genresName.splice(0, 3).join(', ')} | ${movie.release_date.slice(0,4)}
          </p>
        </div>
      </div>`
  );
}