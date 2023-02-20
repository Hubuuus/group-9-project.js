const buttons = document.querySelectorAll('.Header__Button');

function changeActive(clickedButton) {
  if (!clickedButton.classList.contains('Header__Button--Active')) {
    buttons.forEach(button => button.classList.remove('Header__Button--Active'));
    clickedButton.classList.add('Header__Button--Active');
  }
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    changeActive(this);
  });
});