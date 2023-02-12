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