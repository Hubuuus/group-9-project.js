import axios from 'axios';
var debounce = require('lodash.debounce');

const blur = document.querySelector('[data-modal="blur"]');
const modalOpen = document.querySelector('[data-modal="open"]');
const modalContent = document.querySelector('[data-modal="content"]');

export const toggleHidden = () => {
  [modalOpen, blur].map(el => el.classList.toggle('hidden'));
  if (modalContent.innerHTML !== '') modalContent.innerHTML = '';
};

export const gallery = document.querySelector('.Gallery');

let movieId = 500;

gallery.addEventListener('click', e => {
  const divId = e.target.closest('div[id]');
  if (divId) {
    movieId = divId.getAttribute('id');
    activeFetch(e);
    toggleHidden(e);
  }
});

let mouseX;
let mouseY;

document.addEventListener(
  'mousemove',
  debounce(e => {
    if (modalOpen.classList.contains('hidden')) {
      mouseX = `${e.clientX}px`;
      mouseY = `${e.clientY}px`;
      modalOpen.style.top = mouseY;
      modalOpen.style.left = mouseX;
      modalOpen.style.transform = 'translate(-50%, -50%)';
    }
  }, 5)
);

const activeFetch = async e => {
  e.preventDefault();
  fetchItems()
    .then(items => renderItems(items))
    .catch(error => {
      console.log(error);
    });
};

const apiKey = '28e7de8a02a020e11a900cecedfaedb8';

async function fetchItems() {
  const params = new URLSearchParams({
    api_key: apiKey,
  });

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?${params}`
    );
    return response.data;
  } catch (error) {
    console.log('Error: ', error);
  }
}

export const addMovie = true ? JSON.parse(localStorage.getItem('addMovie')) || [] : [];
export const queueMovie = true ? JSON.parse(localStorage.getItem('queueMovie')) || [] : [];

function renderItems(items) {
  let genre = [];
  for (const key of items.genres) {
    genre.push(key.name);
  }

  const genres = genre.join(', ');
  let poster = `https://image.tmdb.org/t/p/w500${items.poster_path}`;

  if (items.poster_path === null) {
    poster = 'https://ik.imagekit.io/paulinas/noTMDBposter.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676735394520';
  }

  modalContent.insertAdjacentHTML(
    'beforeend',`
    <div class="Modal__Image" style="background-image: url(${poster})"></div>
    <div class="Modal__Text">
      <h1 class="Modal__MovieTitle dark-mode">${items.title}</h1>
      <div class="Modal__Info dark-mode">
        <div class="Modal__Properties dark-mode">
          <p>Vote / Votes</p>
          <p class="Modal__Property dark-mode">Popularity</p>
          <p class="Modal__Property dark-mode">Original Title</p>
          <p class="Modal__Property dark-mode">Genre</p>
        </div>
        <div class="Modal__Values">
          <p class="Modal__Votes">
            <span class="Modal__OneVote">${items.vote_average}</span> /
            <span class="Modal__AllVotes dark-mode">${items.vote_count}</span>
          </p>
          <p class="Modal__Value dark-mode">${items.popularity}</p>
          <p class="Modal__Value dark-mode">${items.original_title}</p>
          <p class="Modal__Value dark-mode">${genres}</p>
        </div>
      </div>
      <h2 class="Modal__About dark-mode">ABOUT</h2>
      <p class="Modal__Review dark-mode">${items.overview}</p>
      <div class="Modal__Buttons">
        <button class="Modal__Button Modal__Button--Watched" data-movie="add">
          ADD TO WATCHED
        </button>
        <button class="Modal__Button Modal__Button--Queue" data-movie="queue">ADD TO QUEUE</button>
      </div>
      </div>`);

  // modalOpen.innerHTML = markup;

  const btnWatch = document.querySelector('[data-movie="add"]');
  const btnQueue = document.querySelector('[data-movie="queue"]');

  btnWatch.addEventListener('click', () => {
    if (!addMovie.includes(movieId)) {
      addMovie.push(movieId);
      btnWatch.classList.add('button-addEffect');
      setTimeout(function() {
        btnWatch.classList.remove('button-addEffect');
      }, 300);
    }
    localStorage.setItem('addMovie', JSON.stringify(addMovie));
  });

  btnQueue.addEventListener('click', () => {
    if (!queueMovie.includes(movieId)) {
      queueMovie.push(movieId);
      btnQueue.classList.add('button-addEffect');
      setTimeout(function() {
        btnQueue.classList.remove('button-addEffect');
      }, 300);
    }
    localStorage.setItem('queueMovie', JSON.stringify(queueMovie));
  });

  const closeBtn = document.querySelector('[data-modal="close"]');

  [blur, closeBtn].map(el => el.addEventListener('click', toggleHidden));

  const escModal = e => {
    if (e.key === 'Escape')
      [modalOpen, blur].map(el => {
        el.classList.add('hidden');
        modalContent.innerHTML = '';
      });
  };

  document.addEventListener('keyup', escModal);
}
