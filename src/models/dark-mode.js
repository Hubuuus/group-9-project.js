const container = document.querySelector('.Container');
const textColor = document.querySelectorAll('.dark-mode');
const darkModeBtn = document.querySelectorAll('.dark-mode-btn');

console.log(textColor);

const darkMode = () => {
    if (container.style.backgroundColor === "") {
        container.style.backgroundColor = "black";
        textColor.forEach(el => el.style.color = "white");
    }
    else {
        container.style.backgroundColor = "";
        textColor.forEach(el => el.style.color = "");
    }
    darkModeBtn.forEach(el => el.classList.toggle("dark-hidden"));
    console.log("klik!")
}

darkModeBtn.forEach(el => el.addEventListener('click', darkMode));