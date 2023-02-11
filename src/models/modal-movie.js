const closeBtn = document.querySelector('.Modal__Close');
const modal = document.querySelector('.Modal');
const blur = document.querySelector('.blur');
const movieCard = document.querySelectorAll('.movie-card');

const toggleHidden = () => {
  [blur, modal].map(el => el.classList.toggle('hidden'));
};

[closeBtn, blur, ...movieCard].map(el => el.addEventListener('click', toggleHidden));

const escModal = e => {
  if (e.key === 'Escape') [blur, modal].map(el => el.classList.add('hidden'));
};

document.addEventListener('keyup', escModal);