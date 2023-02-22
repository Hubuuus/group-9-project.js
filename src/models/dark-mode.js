const container = document.querySelector('.Container');
const textColor = document.querySelectorAll('.DarkMode');
const darkModeBtn = document.querySelectorAll('.DarkModeBtn');
const lightBtn = document.querySelector('.Light');
const darkBtn = document.querySelector('.Dark');

let darkModeFlag = JSON.parse(localStorage.getItem('darkModeFlag')) || false;

const setDarkMode = (flag) => {
    if (flag) {
    darkBtn.classList.add("DarkHidden");
    lightBtn.classList.remove("DarkHidden");
    container.style.backgroundColor = "#333";
    textColor.forEach(el => el.style.color = "#ddd");
    textColor.forEach(el => el.style.backgroundColor = "#333");
    } else {
    darkBtn.classList.remove("DarkHidden");
    lightBtn.classList.add("DarkHidden");
    container.style.backgroundColor = "";
    textColor.forEach(el => el.style.color = "");
    textColor.forEach(el => el.style.backgroundColor = "");
  }
    darkModeFlag = flag;
  localStorage.setItem('darkModeFlag', JSON.stringify(flag));
};

darkModeBtn.forEach(el => {
    el.addEventListener('click', () => {
    container.classList.add("TransitionEfc")
      setDarkMode(!darkModeFlag);
  });
});

setDarkMode(darkModeFlag);