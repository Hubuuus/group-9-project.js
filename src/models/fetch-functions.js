import axios from 'axios';
import { presentMovies } from "./present-movies";

const API_KEY = '28e7de8a02a020e11a900cecedfaedb8';

const BASE_URL = 'https://api.themoviedb.org/3/';

let input = document.querySelector('.search-input');

export const fetchSearchedMovies = async () => {
  const urlSearchedMovies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}&page=1`;

  const response = await axios
  .get(urlSearchedMovies)
  .then(function (response) {
    // getGenres().then(item => {
    //   const genres = item;
    //   createCards(response.data.results, genres);
    // })
    // pagination function
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });

return response;
};


export const fetchPopularMovies = async () => {
  const urlPopularMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=1`;

  const response = await axios
    .get(urlPopularMovies)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};

export const getGenres = async () => {
  const urlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
 
  const response = await axios
    .get(urlGenres)
    .then(function (response) {
      return response.data.genres;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};

export const getDetails = async movie_id => {
  const urlInfo = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;

  const response = await axios
    .get(urlInfo)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};

const gallery = document.querySelector('.gallery');

document.addEventListener('DOMContentLoaded', presentMovies());