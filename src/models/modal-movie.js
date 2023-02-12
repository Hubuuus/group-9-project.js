import axios from 'axios';

//  --------------------------------------- Modal run

const blur = document.querySelector('[data-modal="blur"]');
const modalOpen = document.querySelector('[data-modal="open"]');
const closeBtn = document.querySelector('[data-modal="close"]');
const movieCard = document.querySelectorAll('.movie-card');

console.log(modalOpen);

const toggleHidden = () => {
  [modalOpen, blur].map(el => el.classList.toggle('hidden'));
  console.log("Otwarcie / zamknięcie modala");
};

[closeBtn, blur, ...movieCard].map(el => el.addEventListener('click', toggleHidden));

const escModal = e => {
  if (e.key === 'Escape') [modalOpen, blur].map(el => el.classList.add('hidden'));
};

document.addEventListener('keyup', escModal);

// --------------------------------------- API

const modalMovieImg = document.querySelector('.Modal__Image');
const movieTitle = document.querySelector('[data-title]');
const voteAv = document.querySelector('[data-vote="average"]');
const voteAll = document.querySelector('[data-vote="count"]');
const popularity = document.querySelector(`[data-popularity]`);
const originalTitle = document.querySelector('[data-title-original]');
const property = document.querySelector('[data-genres]');
const review = document.querySelector('[data-review]');

const apiKey = "28e7de8a02a020e11a900cecedfaedb8";
const orientation = "horizontal";
const safesearch = true;
const movieID = 550;

movieCard.forEach(el => el.addEventListener("click", e => activeFetch(e)));

const activeFetch = async e => {
  e.preventDefault();
  fetchItems()
    .then(items => renderItems(items))
    .catch(error => {
      console.log(error);
    });
};

async function fetchItems() {
  const params = new URLSearchParams({
        api_key: apiKey,
    });

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieID}?${params}`
        );
        return response.data;
    } catch (error) {
        console.log("Error: ", error);
  };
};

function renderItems(items) {
  console.log('API działa')
  console.log(items);
  console.log(items.file_path);

  let genre = [];
  for (const key of items.genres) {
    genre.push(key.name);
  }

  console.log(genre);
  modalMovieImg.style.backgroundImage = `url('https://image.tmdb.org/t/p/w200${items.poster_path}')`;
  movieTitle.textContent = `${items.title}`;
  voteAv.textContent = `${items.vote_average}`;
  voteAll.textContent = `${items.vote_count}`;
  popularity.textContent = `${items.popularity}`;
  originalTitle.textContent = `${items.original_title}`;
  property.textContent = `${genre.join(", ")}`;
  review.textContent = `${items.overview}`;
}

// function renderItems(items) {
//     maxPictures += 40;
//     if (items.hits.length === 0) return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
//     const markup = items.hits
//         .map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => {
//             return ``;
//         }).join("");
  
//     galleryContainer.insertAdjacentHTML("beforeend", markup);
//     lightbox.refresh();
//     loadMoreButton.classList.remove("hidden");
//     if (page > 1) {
//         const { height: cardHeight = 350 } = document
//         .querySelector(".gallery")
//         .firstElementChild.getBoundingClientRect();

//         window.scrollBy({
//             top: cardHeight * 2,
//             behavior: "smooth",
//         });
//     }
// };