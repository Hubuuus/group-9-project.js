function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired89d;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired89d=i);var o=i("2shzp");var d=i("50Kfe");function r(e,t){let n=[];return e.forEach((e=>{let a=t.find((t=>t.id===e)).name;void 0!==a&&n.push(a)})),n}var c=i("5P1lj");let s;const l=document.querySelector(".Gallery"),u=document.querySelector(".SearchInput");const f=async()=>await o.default.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8"}}).then((function(e){return e})).catch((function(e){console.log(e)}));u.addEventListener("input",e(d)((async e=>{e.preventDefault();const t=u.value.trim();p(t)}),1e3));const p=async(e,t)=>await o.default.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8",query:e,page:t}}).then((e=>(function(e){l.innerHTML="";const t=e.data.results;v().then((e=>{h(t,e)}))}(e),e))).catch((e=>{console.log(e)}));const v=async()=>await o.default.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8"}}).then((function(e){return e.data.genres})).catch((function(e){console.log(e)}));function h(e,t){e.map((e=>{!function(e,t){let n=`https://image.tmdb.org/t/p/w500${e.poster_path}`;l.insertAdjacentHTML("beforeend",` <div class="MovieCard" id="${e.id}">\n        <img src="${n}" alt="${e.title}" loading="lazy" /> \n        <div class="MovieCardInfo">\n          <p class="MovieCardData">\n            <span class="MovieCardTitle">${e.title}\n          </span>\n           "${t.splice(0,3).join(", ")}" | ${e.release_date.slice(0,4)}\n          </p>\n        </div>\n      </div>`);const a=document.querySelectorAll(".MovieCard");for(let e of a)e.addEventListener("click",(function(){s=this.id}));a.forEach((e=>e.addEventListener("click",c.toggleHidden))),a.forEach((e=>e.addEventListener("click",(e=>(0,c.activeFetch)(e)))))}(e,r(e.genre_ids,t))}))}document.addEventListener("DOMContentLoaded",void v().then((e=>{const t=e;f().then((e=>{h(e.data.results,t)}))})));
//# sourceMappingURL=index.21472fac.js.map
