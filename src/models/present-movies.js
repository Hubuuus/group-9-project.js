import { fetchPopularMovies } from './fetch-functions';
import { getGenres, createCards } from './fetch-functions';

export function presentMovies(pageNum) {
  getGenres().then(item => {
    const genres = item;

    fetchPopularMovies(pageNum).then(result => {
      const popular = result.data.results;
      createCards(popular, genres);
    });
  });
}
