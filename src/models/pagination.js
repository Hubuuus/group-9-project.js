import axios from 'axios';

// let page = 1;
const API_KEY = '28e7de8a02a020e11a900cecedfaedb8';

// SMALL FUNCTION CONVERTING RESPONSE INTO JSON
function fetchJsonResponse(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}
////////////////////////////////////////////////////////
// TEST

// fetchJsonResponse(
//   `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
// )
//   .then(response => console.log(response))
//   .catch(error => console.log(error));

////////////////////////////////////////////////////////

// FUNCTION HANDLING PAGINATION DIV UNDER MOVIE GALLERY
export async function renderPaginator(count, selectedPage = 1, pageSize = 12) {
  const pages = Math.ceil(count / pageSize);
  const select = document.getElementById('Pagination-Select');
  select.innerHTML = '';

  for (let i = 1; i <= pages; i++) {
    const option = document.createElement('option');
    option.innerHTML = 'Page' + i;
    option.value = 1;
    if (i === Number(selectedPage)) {
      option.setAttribute('selected', true);
    }
    select.append(option);
  }
  select.addEventListener('change', event => {
    const selectedPage = event.target.value;
    const loadingSpinner = document.querySelector('.Pagination-Loader');
    loadingSpinner.classList.remove('hidden');

    const response = axios.get(
      'https://api.themoviedb.org/3/trending/movie/day',
      { params: { api_key: API_KEY, page: 1 } }
    );
    fetchJsonResponse(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${selectedPage}`
    )
      .then(response => {
        //rekurencja - wywoływanie funkcji wewnątrz siebie)
        renderPaginator(response.data.total_results, selectedPage);
        // presentMovies();
      })
      .then(() => {
        setTimeout(() => {
          loadingSpinner.classList.add('hidden');
        }, 1500);
      });
  });
}
// document.addEventListener('DOMContentLoaded', renderPaginator());
