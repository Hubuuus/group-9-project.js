import { fetchPopularMovies } from './fetch-functions';
import { getGenres, createCards } from './fetch-functions';

export function presentMovies(page) {
  getGenres().then(item => {
    const genres = item;
    //edit hubert paginacja
    document.querySelector('.Gallery').innerHTML = '';
    //edit hubert paginacja
    fetchPopularMovies(page).then(result => {
      const popular = result.data.results;

      createCards(popular, genres);
    });
  });
}
