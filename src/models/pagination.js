let page = 1;

// SMALL FUNCTION CONVERTING RESPONSE INTO JSON
function fetchJsonResponse(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}
// FUNCTION HANDLING PAGINATION DIV UNDER MOVIE GALLERY
function renderPaginator(count, selectedPage = 1, pageSize = 12) {
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
    fetchJsonResponse(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${selectedPage}`
    ).then(response => {
      //rekurencja - wywoływanie funkcji wewnątrz siebie)
      renderPaginator(response.data.total_results, selectedPage);
      // presentMovies();
    });
  });
  renderPaginator(response.data.total_results);
}
// document.addEventListener('DOMContentLoaded', renderPaginator());
