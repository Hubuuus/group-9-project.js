function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired89d;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired89d=o);var i=o("2shzp");function r(e){N().then((t=>{const n=t;document.querySelector(".Gallery").innerHTML="",k(e).then((e=>{w(e.data.results,n)}))}))}var s=o("50Kfe");function d(e,t){let n=[];return e.forEach((e=>{let a=t.find((t=>t.id===e)).name;void 0!==a&&n.push(a)})),n}var c=o("7Y9D8");function l(){c.Loading.circle("Loading ...",{svgColor:"#ff6b08"})}c=o("7Y9D8");const u=document.querySelector(".Gallery"),f=document.querySelector(".SearchInput"),v=document.querySelector('[data-header="alert"]'),p=document.getElementById("Next-Button"),g=document.getElementById("Prev-Button");const m=document.getElementById("Pagination-Numbers");let h=1;const y=e=>{e.classList.add("Disabled"),e.setAttribute("Disabled",!0)},b=e=>{e.classList.remove("Disabled"),e.removeAttribute("Disabled")},L=(e,t)=>{1===e?y(g):b(g),e===t?y(p):b(p)},B=e=>{document.querySelectorAll(".Nr-Button").forEach((e=>{e.classList.remove("Pagination-Btn--Active")})),document.querySelectorAll(".Nr-Button").forEach((t=>{Number(t.textContent)==e&&t.classList.add("Pagination-Btn--Active")}))},E=()=>{m.insertAdjacentHTML("beforeend",'\n      <button class="Pagination-Btn Pagination-Btn__Dots" id="Nr-Button">\n      ...\n      </button>\n    ')},D=e=>{const t=e===h?"Pagination-Btn--Active":"";m.insertAdjacentHTML("beforeend",`\n      <button class="Pagination-Btn Nr-Button ${t}" id="Nr-Button" >\n      ${e}\n      </button>\n    `)},M=(e,t)=>{if(m.innerHTML="",e<=5){for(let e=1;e<=7;e++)D(e);E(),D(t)}else if(e>=t-5){D(1),E();for(let e=t-6;e<=t;e++)D(e)}else{D(1),E();for(let t=e-2;t<=e+2;t++)D(t);E(),D(t)}};window.addEventListener("load",(()=>{L(1),M(1),B(h),p.addEventListener("click",(e=>{e.preventDefault(),h++,r(h),L(h),M(h),B(h)})),g.addEventListener("click",(e=>{e.preventDefault(),h--,r(h),L(h),M(h),B(h)})),m.addEventListener("click",(e=>{if(e.target.classList.contains("Nr-Button")){const t=Number(e.target.textContent);t!==h&&(h=t,r(h),L(h),M(h),B(h))}}))}));const k=async e=>{l();const t=await i.default.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8",page:e}}).then((function(e){const t=e.data.total_pages/10;return M(h,t),L(h,t),e})).catch((function(e){console.log(e)}));return c.Loading.remove(500),t};f.addEventListener("keypress",(function(e){"Enter"===e.key&&e.preventDefault()})),f.addEventListener("input",e(s)((async e=>{if(e.preventDefault(),""==f.value)return location.reload();const t=e.target.value.trim();_(t)}),1e3));const _=async e=>{l();const t=await i.default.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8",query:e}}).then((e=>(function(e){u.innerHTML="";const t=e.data.results;N().then((e=>{w(t,e)}))}(e),v.classList.add("hidden"),0===e.data.results.length&&v.classList.remove("hidden"),e))).catch((()=>{console.log("error")}));return c.Loading.remove(500),c.Notify.success(`We found ${t.data.total_results} movies!`),t};const N=async()=>await i.default.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8"}}).then((function(e){return e.data.genres})).catch((function(e){console.log(e)}));function w(e,t){e.map((e=>{!function(e,t){let n=`https://image.tmdb.org/t/p/w500${e.poster_path}`;u.insertAdjacentHTML("beforeend",` <div class="MovieCard" id="${e.id}">\n        <img src="${n}" <img class ="MoviePoster" src="${n}" \n        onerror="this.src='https://ik.imagekit.io/paulinas/noTMDBposter.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676735394520'" \n        alt="${e.title}" loading="lazy" /> \n        <div class="MovieCardInfo">\n          <p class="MovieCardData">\n            <span class="MovieCardTitle dark-mode">${e.title}\n          </span>\n           ${t.splice(0,3).join(", ")} | ${e.release_date.slice(0,4)}\n          </p>\n        </div>\n      </div>`);const a=document.querySelectorAll(".MovieCard");for(let e of a)e.addEventListener("click",(function(){movieId=this.id}))}(e,d(e.genre_ids,t))}))}document.addEventListener("DOMContentLoaded",r());
//# sourceMappingURL=index.1d0fe43b.js.map
