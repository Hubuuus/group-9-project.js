import { galleryCard } from "./create-movie-card";

export function createCards(movies, genres){
    movies.map(movie => {
    const genresName = nameOfGenres(movie, genres);
    galleryCard(movie, genresName);
    });
  }
  
  function nameOfGenres(movie, genres) {
      return genres.reduce((accumulator, item) => {
        if (movie.genre_ids.includes(item.id)) {
          accumulator.push(item.name);
        }
        return accumulator;
      }, []);
    }