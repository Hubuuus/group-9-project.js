// THIS FILE ADDS MOVIES TO WATCHED LIST OR TO QUEUE
// USING LOCAL STORAGE

const btnWatch = document.querySelector('.Modal__Button--Watched');
// console.log('🚀 ~ btnWatch', btnWatch);
const btnQueue = document.querySelector('.Modal__Button--Queue');
const gallery = document.querySelector('.gallery');

function addMovieToWatched() {
  const createdDiv = document.createElement('div');
  gallery.appendChild(createdDiv);
  createdDiv.innerHTML = 'created div ';
  localStorage.setItem('testDiv', createdDiv.outerHTML);
  console.log('div added to local storage');
}
// btnWatch.addEventListener('click', addMovieToWatched());
// // localStorage.clear();
