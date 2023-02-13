import { fetchPopularMovies } from "./fetch-functions";
import { getGenres } from "./fetch-functions";
import { galleryCard } from "./create-movie-card";
export const gallery = document.querySelector('.gallery');

export function presentMovies(){

  getGenres().then(item => {
    const genres = item;
    console.log(genres);
  
    fetchPopularMovies().then(result => {
        const popular = result.data.results;
        console.log(result.data.results);
        createCards(popular, genres);
    });
  });
  
  function createCards(movies, genres){
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
}