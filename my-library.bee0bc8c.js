var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=e.parcelRequired89d;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var r=a[e];delete a[e];var l={id:e,exports:{}};return n[e]=l,r.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},e.parcelRequired89d=r);r("2shzp");var l=r("5P1lj");const i=document.querySelector('[data-library="watched"]'),t=document.querySelector('[data-library="queue"]'),o=document.querySelector(".Pagination-Loader"),d="28e7de8a02a020e11a900cecedfaedb8";function s(e){const n=e.genres.map((e=>e.name)),a=`https://image.tmdb.org/t/p/w500${e.poster_path}`;l.gallery.insertAdjacentHTML("beforeend",` <div class="MovieCard" id="${e.id}">\n        <img src="${a}" alt="${e.title}" loading="lazy" /> \n        <div class="MovieCardInfo">\n          <p class="MovieCardData">\n            <span class="MovieCardTitle">${e.title}</span>\n           ${n.splice(0,3).join(", ")} | ${e.release_date.slice(0,4)}\n          </p>\n        </div>\n      </div>`),""!==l.gallery.innerHTML&&(o.innerHTML="")}i.addEventListener("click",(async e=>{e.preventDefault(),l.gallery.innerHTML="",""===l.gallery.innerHTML&&(o.innerHTML="LOADING MOVIES");const n=l.addMovie.map((e=>fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${d}&language=en-US`)));""!==l.gallery.innerHTML&&(l.gallery.innerHTML=""),Promise.all(n).then((e=>Promise.all(e.map((e=>e.json()))))).then((e=>{e.forEach((e=>s(e)))})).catch((e=>console.log(e)))})),t.addEventListener("click",(async e=>{e.preventDefault(),l.gallery.innerHTML="",""===l.gallery.innerHTML&&(o.innerHTML="LOADING MOVIES");const n=l.queueMovie.map((e=>fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${d}&language=en-US`)));""!==l.gallery.innerHTML&&(l.gallery.innerHTML=""),Promise.all(n).then((e=>Promise.all(e.map((e=>e.json()))))).then((e=>{e.forEach((e=>s(e)))})).catch((e=>console.log(e)))}));
//# sourceMappingURL=my-library.bee0bc8c.js.map
