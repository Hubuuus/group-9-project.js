const modal = document.querySelector('.ModalFooter');
const overlay = document.querySelector('.OverlayFooter');
const openModalBtn = document.querySelector('.ButtonOpen');
const closeModalBtn = document.querySelector('.ModalFooter__ButtonClose');

const openModal = function () {
  modal.classList.remove('IsHidden');
  overlay.classList.remove('IsHidden');
};

openModalBtn.addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('IsHidden');
  overlay.classList.add('IsHidden');
};

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('IsHidden')) {
    closeModal();
  }
});

if (
  modal.classList.contains('IsHidden') ||
  overlay.classList.contains('IsHidden')
) {
} else {
  closeModalBtn.removeEventListener();
}
