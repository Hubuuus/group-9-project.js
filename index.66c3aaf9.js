var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired89d;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequired89d=o);var a=o("2shzp");const d=document.querySelector(".gallery");document.querySelector(".gallery");document.querySelector(".search-input");const i=async()=>await a.default.get("https://api.themoviedb.org/3/trending/movie/day?api_key=28e7de8a02a020e11a900cecedfaedb8&page=1").then((function(e){return e})).catch((function(e){console.log(e)})),r=async()=>await a.default.get("https://api.themoviedb.org/3/genre/movie/list?api_key=28e7de8a02a020e11a900cecedfaedb8").then((function(e){return e.data.genres})).catch((function(e){console.log(e)}));document.querySelector(".gallery");document.addEventListener("DOMContentLoaded",void r().then((e=>{const t=e;console.log(t),i().then((e=>{const n=e.data.results;console.log(e.data.results),function(e,t){e.map((e=>{const n=function(e,t){return t.reduce(((t,n)=>(e.genre_ids.includes(n.id)&&t.push(n.name),t)),[])}(e,t);!function(e,t){let n=`https://image.tmdb.org/t/p/w500${e.poster_path}`;d.insertAdjacentHTML("beforeend",` <div class="movie-card" id="${e.id}">\n        <img src="${n}" alt="${e.title}" loading="lazy" /> \n        <div class="movie-card__info">\n          <p class="movie-card__data">\n            <span class="movie-card__title">${e.title}\n          </span>\n           ${t} | ${e.release_date.slice(0,4)}\n          </p>\n        </div>\n      </div>`)}(e,n)}))}(n,t)}))})));
//# sourceMappingURL=index.66c3aaf9.js.map