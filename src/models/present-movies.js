import { fetchPopularMovies } from "./fetch-functions";
import { getGenres } from "./fetch-functions";
import { createCards } from "./create-gallery";

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
  
}