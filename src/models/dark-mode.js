const container = document.querySelector('.Container');
const textColor = document.querySelectorAll('.dark-mode');
const darkModeBtn = document.querySelectorAll('.dark-mode-btn');
const lightBtn = document.querySelector('.light');
const darkBtn = document.querySelector('.dark');

let darkModeFlag = JSON.parse(localStorage.getItem('darkModeFlag')) || false;

const setDarkMode = (flag) => {
    if (flag) {
    darkBtn.classList.add("dark-hidden");
    lightBtn.classList.remove("dark-hidden");
    container.style.backgroundColor = "#333";
    textColor.forEach(el => el.style.color = "#ddd");
    textColor.forEach(el => el.style.backgroundColor = "#333");
    } else {
    darkBtn.classList.remove("dark-hidden");
    lightBtn.classList.add("dark-hidden");
    container.style.backgroundColor = "";
    textColor.forEach(el => el.style.color = "");
    textColor.forEach(el => el.style.backgroundColor = "");
  }
    darkModeFlag = flag;
  localStorage.setItem('darkModeFlag', JSON.stringify(flag));
};

darkModeBtn.forEach(el => {
    el.addEventListener('click', () => {
    container.classList.add("transitionEfc")
      setDarkMode(!darkModeFlag);
  });
});

setDarkMode(darkModeFlag);