function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=n.parcelRequired89d;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},n.parcelRequired89d=o);var i=o("2shzp");const s=document.querySelector(".Gallery");var r=o("50Kfe");const d=document.querySelector(".Gallery"),l=document.querySelector(".SearchInput");l.addEventListener("input",e(r)((async e=>{e.preventDefault();const n=l.value.trim();c(n)}),500));const c=async(e,n)=>{const t=await i.default.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8",query:e,page:n}}).then((e=>(function(e){d.innerHTML="";const n=e.data.results;function t(e){e.map((e=>{!function(e){let n=`https://image.tmdb.org/t/p/w500${e.poster_path}`;d.insertAdjacentHTML("beforeend",` <div class="MovieCard" id="${e.id}">\n        <img src="${n}" alt="${e.title}" loading="lazy" /> \n        <div class="MovieCardInfo">\n          <p class="MovieCardData">\n            <span class="MovieCardTitle">${e.title}\n          </span>\n           "//$//{genresName}" | ${e.release_date.slice(0,4)}\n          </p>\n        </div>\n      </div>`)}(e)}))}p().then((e=>{t(n)}))}(e),e))).catch((e=>{console.log(e)}));return console.log("Response",t),t};const u=async()=>await i.default.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8"}}).then((function(e){return console.log("response",e),console.log("results",e.data.results),e})).catch((function(e){console.log(e)})),p=async()=>await i.default.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8"}}).then((function(e){return e.data.genres})).catch((function(e){console.log(e)}));document.addEventListener("DOMContentLoaded",void p().then((e=>{const n=e;u().then((e=>{!function(e,n){e.map((e=>{const t=function(e,n){return n.reduce(((n,t)=>(e.genre_ids.includes(t.id)&&n.push(t.name),n)),[])}(e,n);!function(e,n){let t=`https://image.tmdb.org/t/p/w500${e.poster_path}`;s.insertAdjacentHTML("beforeend",` <div class="MovieCard" id="${e.id}">\n        <img src="${t}" alt="${e.title}" loading="lazy" /> \n        <div class="MovieCardInfo">\n          <p class="MovieCardData">\n            <span class="MovieCardTitle">${e.title}\n          </span>\n           ${n.splice(0,3).join(", ")} | ${e.release_date.slice(0,4)}\n          </p>\n        </div>\n      </div>`)}(e,t)}))}(e.data.results,n)}))})));
//# sourceMappingURL=index.b1f11e78.js.map
