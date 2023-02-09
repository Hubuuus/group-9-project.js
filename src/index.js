const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");
const blur = document.querySelector(".blur");

const toggleHidden = () => [blur, modal].map(el => el.classList.toggle("hidden"));

[openBtn, closeBtn, blur].map(el => el.addEventListener("click", toggleHidden));

document.addEventListener("keyup", e => {
    if (e.key === "Escape") [blur, modal].map(el => el.classList.add("hidden"))
})