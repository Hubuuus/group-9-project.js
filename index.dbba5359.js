const e=document.querySelector(".open"),d=document.querySelector(".Modal__Close"),t=document.querySelector(".Modal"),c=document.querySelector(".blur"),o=()=>{[c,t].map((e=>e.classList.toggle("hidden")))};[e,d,c].map((e=>e.addEventListener("click",o))),document.addEventListener("keyup",(e=>{"Escape"===e.key&&[c,t].map((e=>e.classList.add("hidden")))}));
//# sourceMappingURL=index.dbba5359.js.map
