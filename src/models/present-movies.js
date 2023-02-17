import { fetchPopularMovies } from './fetch-functions';
import { getGenres, createCards } from './fetch-functions';
import { galleryCard } from './create-movie-card';
import { gallery } from './fetch-functions';
import { namesGenres } from './genresid-name';

export function presentMovies() {
  getGenres().then(item => {
    const genres = item;

    fetchPopularMovies().then(result => {
      const popular = result.data.results;
      createCards(popular, genres);
    });
  });

  // function createCards(movies, genres) {
  //   movies.map(movie => {
  //     // const genresName = nameOfGenres(movie, genres);
  //     const genresName = namesGenres(movie.genre_ids, genres);
  //     // console.log('presentMovies:', movie.genre_ids, genresName);
  //     galleryCard(movie, genresName);
  //   });
  // }

  // function nameOfGenres(movie, genres) {
  //   return genres.reduce((accumulator, item) => {
  //     if (movie.genre_ids.includes(item.id)) {
  //       accumulator.push(item.name);
  //     }
  //     return accumulator;
  //   }, []);
  // }
}

// document.addEventListener('DOMContentLoaded', presentMovies());
