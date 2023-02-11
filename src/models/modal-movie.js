const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.Modal__Close');
const modal = document.querySelector('.Modal');
const blur = document.querySelector('.blur');

const toggleHidden = () => {
  [blur, modal].map(el => el.classList.toggle('hidden'));
};

[openBtn, closeBtn, blur].map(el => el.addEventListener('click', toggleHidden));

document.addEventListener('keyup', e => {
  if (e.key === 'Escape') [blur, modal].map(el => el.classList.add('hidden'));
});
