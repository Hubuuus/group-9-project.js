const gallery = document.querySelector('.gallery');

export function galleryCard(movie, genresName) {
  // clearGallery();
  let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  gallery.insertAdjacentHTML(
    'beforeend',
    ` <div class="MovieCard" id="${movie.id}">
        <img src="${poster}" alt="${movie.title}" loading="lazy" /> 
        <div class="MovieCardInfo">
          <p class="MovieCardData">
            <span class="MovieCardTitle">${movie.title}
          </span>
           ${genresName} | ${movie.release_date.slice(0,4)}
          </p>
        </div>
      </div>`
  );
}