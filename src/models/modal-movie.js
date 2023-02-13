import axios from 'axios';

const blur = document.querySelector('[data-modal="blur"]');
const modalOpen = document.querySelector('[data-modal="open"]');
const movieCard = document.querySelectorAll('.movie-card');

const toggleHidden = () => {
  [modalOpen, blur].map(el => el.classList.toggle('hidden'));
  if (modalOpen.innerHTML !== "") modalOpen.innerHTML = "";
};

movieCard.forEach(el => el.addEventListener('click', toggleHidden));

let mouseX;
let mouseY;

document.addEventListener('mousemove', e => {
  if (modalOpen.classList.contains('hidden')) {
    mouseX = `${e.clientX}px`;
    mouseY = `${e.clientY}px`;
    modalOpen.style.top = mouseY;
    modalOpen.style.left = mouseX;
    modalOpen.style.transform = "translate(-50%, -50%)"
    console.log(mouseX, mouseY);
  };
})

const apiKey = "28e7de8a02a020e11a900cecedfaedb8";
const orientation = "horizontal";
const safesearch = true;
const movieID = 620;

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

  let genre = [];
  for (const key of items.genres) {
    genre.push(key.name);
  }

  const genres = genre.join(", ");

  const markup = `
  <div class="Modal__Close" data-modal="close">
      <div class="Modal__Close-x" height="50" width="50"></div>
    </div>
    <div class="Modal__Image" style="background-image: url('https://image.tmdb.org/t/p/w200${items.poster_path}')"></div>
    <div class="Modal__Text">
      <h1 class="Modal__MovieTitle">${items.title}</h1>
      <div class="Modal__Info">
        <div class="Modal__Properties">
          <p>Vote / Votes</p>
          <p class="Modal__Property">Popularity</p>
          <p class="Modal__Property">Original Title</p>
          <p class="Modal__Property">Genre</p>
        </div>
        <div class="Modal__Values">
          <p class="Modal__Votes">
            <span class="Modal__OneVote">${items.vote_average}</span> /
            <span class="Modal__AllVotes">${items.vote_count}</span>
          </p>
          <p class="Modal__Value">${items.popularity}</p>
          <p class="Modal__Value">${items.original_title}</p>
          <p class="Modal__Value">${genres}</p>
        </div>
      </div>
      <h2 class="Modal__About">ABOUT</h2>
      <p class="Modal__Review">${items.overview}</p>
      <div class="Modal__Buttons">
        <button class="Modal__Button Modal__Button--Watched">
          ADD TO WATCHED
        </button>
        <button class="Modal__Button Modal__Button--Queue">ADD TO QUEUE</button>
      </div>`;
  
  modalOpen.innerHTML = markup;
  
  const closeBtn = document.querySelector('[data-modal="close"]');

  [blur, closeBtn].map(el => el.addEventListener('click', toggleHidden));

  const escModal = e => {
    if (e.key === 'Escape') [modalOpen, blur].map(el => {
      el.classList.add('hidden');
      modalOpen.innerHTML = "";
    });
  };

  document.addEventListener('keyup', escModal);
};