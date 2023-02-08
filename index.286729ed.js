const e=document.querySelector(".open"),t=document.querySelector(".close"),c=document.querySelector(".modal"),d=document.querySelector(".blur"),o=()=>[d,c].map((e=>e.classList.toggle("hidden")));[e,t,d].map((e=>e.addEventListener("click",o))),document.addEventListener("keyup",(e=>{"Escape"===e.key&&[d,c].map((e=>e.classList.add("hidden")))}));
//# sourceMappingURL=index.286729ed.js.map
