function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired89d;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired89d=o);var r=o("2shzp");var i=o("50Kfe");function s(e,t){let n=[];return e.forEach((e=>{let a=t.find((t=>t.id===e)).name;void 0!==a&&n.push(a)})),n}let d;const l=document.querySelector(".Gallery"),c=document.querySelector(".SearchInput"),u=document.querySelector('[data-header="alert"]');const p=async()=>await r.default.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8"}}).then((function(e){return console.log("popular:",e),console.log("popular results:",e.data.results),e})).catch((function(e){console.log(e)}));c.addEventListener("keypress",(function(e){"Enter"===e.key&&e.preventDefault()})),c.addEventListener("input",e(i)((async e=>{e.preventDefault();const t=e.target.value.trim();f(t)}),1e3));const f=async(e,t)=>await r.default.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8",query:e,page:t}}).then((e=>(function(e){l.innerHTML="";const t=e.data.results;v().then((e=>{h(t,e)}))}(e),u.classList.add("hidden"),0===e.data.results.length&&u.classList.remove("hidden"),e))).catch((()=>{console.log("error")}));const v=async()=>await r.default.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8"}}).then((function(e){return e.data.genres})).catch((function(e){console.log(e)}));function h(e,t){e.map((e=>{!function(e,t){let n=`https://image.tmdb.org/t/p/w500${e.poster_path}`;l.insertAdjacentHTML("beforeend",` <div class="MovieCard" id="${e.id}">\n        <img src="${n}" <img class ="MoviePoster" src="${n}" \n        onerror="this.src='https://ik.imagekit.io/paulinas/noTMDBposter.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676735394520'" \n        alt="${e.title}" loading="lazy" /> \n        <div class="MovieCardInfo">\n          <p class="MovieCardData">\n            <span class="MovieCardTitle">${e.title}\n          </span>\n           ${t.splice(0,3).join(", ")} | ${e.release_date.slice(0,4)}\n          </p>\n        </div>\n      </div>`);const a=document.querySelectorAll(".MovieCard");for(let e of a)e.addEventListener("click",(function(){d=this.id}))}(e,s(e.genre_ids,t))}))}document.addEventListener("DOMContentLoaded",void v().then((e=>{const t=e;p().then((e=>{h(e.data.results,t)}))})));
//# sourceMappingURL=index.cc994a06.js.map
