function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired89d;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired89d=a);var i=a("2shzp");function r(e){q().then((t=>{const n=t;document.querySelector(".Gallery").innerHTML="",k(e).then((e=>{A(e.data.results,n)}))}))}var s=a("50Kfe");function d(e,t){let n=[];return e.forEach((e=>{let o=t.find((t=>t.id===e)).name;void 0!==o&&n.push(o)})),n}var l=a("7Y9D8");function c(){l.Loading.circle("Loading ...",{svgColor:"#ff6b08"})}l=a("7Y9D8");const u=document.querySelector(".Gallery"),f=document.querySelector(".SearchInput"),v=document.querySelector('[data-header="alert"]'),p=document.getElementById("Next-Button"),g=document.getElementById("Prev-Button"),m=document.getElementById("Pagination-Numbers");let h=1;const y=document.querySelector(".NavPageMyLibrary"),b=document.querySelector(".Pagination-Container");y.addEventListener("click",(()=>{b.classList.add("Hidden")}));const L=e=>{e.classList.add("Disabled"),e.setAttribute("Disabled",!0)},w=e=>{e.classList.remove("Disabled"),e.removeAttribute("Disabled")},M=(e,t)=>{1===e?L(g):w(g),e===t?L(p):w(p)},B=e=>{document.querySelectorAll(".Nr-Button").forEach((e=>{e.classList.remove("Pagination-Btn--Active")})),document.querySelectorAll(".Nr-Button").forEach((t=>{Number(t.textContent)==e&&t.classList.add("Pagination-Btn--Active")}))},E=()=>{m.insertAdjacentHTML("beforeend",'\n      <button class="Pagination-Btn Pagination-Btn__Dots" id="Nr-Button">\n      ...\n      </button>\n    ')},D=e=>{const t=e===h?"Pagination-Btn--Active":"";m.insertAdjacentHTML("beforeend",`\n      <button class="Pagination-Btn Nr-Button ${t}" id="Nr-Button" >\n      ${e}\n      </button>\n    `)},_=(e,t)=>{if(m.innerHTML="",window.innerWidth<768){if(t>=5)if(e<=3){for(let e=1;e<=4;e++)D(e);E(),D(t)}else if(e>=t-5){D(1),E();for(let e=t-6;e<=t;e++)D(e)}else{D(1),E();for(let t=e-1;t<=e+1;t++)D(t);E(),D(t)}else if(t<9)for(let e=1;e<=t;e++)D(e)}else if(t>=9)if(e<=5){for(let e=1;e<=7;e++)D(e);E(),D(t)}else if(e>t-5){D(1),E();for(let e=t-6;e<=t;e++)D(e)}else{D(1),E();for(let t=e-2;t<=e+2;t++)D(t);E(),D(t)}else if(t<7)for(let e=1;e<=t;e++)D(e)};window.addEventListener("load",(()=>{M(1),_(1,100),B(h),p.addEventListener("click",(e=>{e.preventDefault(),h++,r(h),M(h),_(h),B(h),window.scrollTo({top:0,behavior:"smooth"})})),g.addEventListener("click",(e=>{e.preventDefault(),h--,r(h),M(h),_(h),B(h),window.scrollTo({top:0,behavior:"smooth"})})),m.addEventListener("click",(e=>{if(e.target.classList.contains("Nr-Button")){const t=Number(e.target.textContent);t!==h&&(h=t,""!==f.value?T(N,h):(r(h),M(h),_(h),B(h),window.scrollTo({top:0,behavior:"smooth"})))}}))}));const k=async e=>{c();const t=await i.default.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8",page:e}}).then((function(e){const t=e.data.total_pages/10;return _(h,t),M(h,t),e})).catch((function(e){console.log(e)}));return l.Loading.remove(500),t};f.addEventListener("keypress",(function(e){"Enter"===e.key&&e.preventDefault()}));let N="";f.addEventListener("input",e(s)((async e=>(e.preventDefault(),""==f.value?location.reload():(N=e.target.value.trim(),h=1,T(N),N))),1e3));const T=async(e,t)=>await i.default.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8",query:e,page:t}}).then((e=>{1===h&&l.Notify.success(`We found ${e.data.total_results} movies!`),c();let t=0;return t=e.data.total_results%20==0?e.data.total_results/20:Math.ceil(e.data.total_results/20),function(e){u.innerHTML="";const t=e.data.results;q().then((e=>{A(t,e)}))}(e),_(h,t),M(h,t),v.classList.add("Hidden"),0===e.data.results.length&&v.classList.remove("Hidden"),l.Loading.remove(500),e})).catch((()=>{console.log("error")}));const q=async()=>await i.default.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"28e7de8a02a020e11a900cecedfaedb8"}}).then((function(e){return e.data.genres})).catch((function(e){console.log(e)}));function A(e,t){e.map((e=>{!function(e,t){let n=`https://image.tmdb.org/t/p/w500${e.poster_path}`;u.insertAdjacentHTML("beforeend",` <div class="MovieCard" id="${e.id}">\n        <img src="${n}" <img class ="MoviePoster" src="${n}" \n        onerror="this.src='https://ik.imagekit.io/paulinas/noTMDBposter.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676735394520'" \n        alt="${e.title}" loading="lazy" /> \n        <div class="MovieCardInfo">\n          <p class="MovieCardData">\n            <span class="MovieCardTitle DarkMode">${e.title}\n          </span>\n           ${t.splice(0,3).join(", ")} | ${e.release_date.slice(0,4)}\n          </p>\n        </div>\n      </div>`);const o=document.querySelectorAll(".MovieCard");for(let e of o)e.addEventListener("click",(function(){movieId=this.id}))}(e,d(e.genre_ids,t))}))}document.addEventListener("DOMContentLoaded",r());
//# sourceMappingURL=index.671b5579.js.map
