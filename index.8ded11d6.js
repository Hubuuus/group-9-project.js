!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired89d;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired89d=a);var o=a("bpxeT"),i=a("2TvXO"),c=a("dIxxU");function u(e){A().then((function(t){var n=t;document.querySelector(".Gallery").innerHTML="",D(e).then((function(e){q(e.data.results,n)}))}))}var s=a("l1Gdk");var d=a("6JpON");function l(){d.Loading.circle("Loading ...",{svgColor:"#ff6b08"})}d=a("6JpON");var f=document.querySelector(".Gallery"),v="28e7de8a02a020e11a900cecedfaedb8",p=document.querySelector(".SearchInput"),m=document.querySelector('[data-header="alert"]'),g=document.getElementById("Next-Button"),h=document.getElementById("Prev-Button"),b=document.getElementById("Pagination-Numbers"),y=1;var L=function(e){e.classList.add("Disabled"),e.setAttribute("Disabled",!0)},k=function(e){e.classList.remove("Disabled"),e.removeAttribute("Disabled")},x=function(e,t){1===e?L(h):k(h),e===t?L(g):k(g)},w=function(e){document.querySelectorAll(".Nr-Button").forEach((function(e){e.classList.remove("Pagination-Btn--Active")})),document.querySelectorAll(".Nr-Button").forEach((function(t){Number(t.textContent)==e&&t.classList.add("Pagination-Btn--Active")}))},B=function(){b.insertAdjacentHTML("beforeend",'\n      <button class="Pagination-Btn Pagination-Btn__Dots" id="Nr-Button">\n      ...\n      </button>\n    ')},E=function(e){var t=e===y?"Pagination-Btn--Active":"";b.insertAdjacentHTML("beforeend",'\n      <button class="Pagination-Btn Nr-Button '.concat(t,'" id="Nr-Button" >\n      ').concat(e,"\n      </button>\n    "))},M=function(e,t){if(b.innerHTML="",e<=5){for(var n=1;n<=7;n++)E(n);B(),E(t)}else if(e>=t-5){E(1),B();for(var r=t-6;r<=t;r++)E(r)}else{E(1),B();for(var a=e-2;a<=e+2;a++)E(a);B(),E(t)}};window.addEventListener("load",(function(){x(1),M(1),w(y),g.addEventListener("click",(function(e){e.preventDefault(),u(++y),x(y),M(y),w(y)})),h.addEventListener("click",(function(e){e.preventDefault(),u(--y),x(y),M(y),w(y)})),b.addEventListener("click",(function(e){if(e.target.classList.contains("Nr-Button")){var t=Number(e.target.textContent);t!==y&&(u(y=t),x(y),M(y),w(y))}}))}));var N,D=(N=e(o)(e(i).mark((function t(n){var r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(),e.next=4,c.default.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:v,page:n}}).then((function(e){var t=e.data.total_pages/10;return M(y,t),x(y,t),e})).catch((function(e){console.log(e)}));case 4:return r=e.sent,d.Loading.remove(500),e.abrupt("return",r);case 7:case"end":return e.stop()}}),t)}))),function(e){return N.apply(this,arguments)});p.addEventListener("keypress",(function(e){"Enter"===e.key&&e.preventDefault()})),p.addEventListener("input",e(s)(function(){var t=e(o)(e(i).mark((function t(n){var r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!=p.value){e.next=3;break}return e.abrupt("return",location.reload());case 3:r=n.target.value.trim(),_(r);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),1e3));var _=function(){var t=e(o)(e(i).mark((function t(n){var r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie",l(),e.next=4,c.default.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:v,query:n}}).then((function(e){return T(e),m.classList.add("hidden"),0===e.data.results.length&&m.classList.remove("hidden"),e})).catch((function(){console.log("error")}));case 4:return r=e.sent,d.Loading.remove(500),d.Notify.success("We found ".concat(r.data.total_results," movies!")),e.abrupt("return",r);case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function T(e){f.innerHTML="";var t=e.data.results;A().then((function(e){q(t,e)}))}var A=function(){var t=e(o)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/genre/movie/list",e.next=3,c.default.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:v}}).then((function(e){return e.data.genres})).catch((function(e){console.log(e)}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function q(e,t){e.map((function(e){var n,r,a;!function(e,t){var n="https://image.tmdb.org/t/p/w500".concat(e.poster_path);f.insertAdjacentHTML("beforeend",' <div class="MovieCard" id="'.concat(e.id,'">\n        <img src="').concat(n,'" <img class ="MoviePoster" src="').concat(n,'" \n        onerror="this.src=\'https://ik.imagekit.io/paulinas/noTMDBposter.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676735394520\'" \n        alt="').concat(e.title,'" loading="lazy" /> \n        <div class="MovieCardInfo">\n          <p class="MovieCardData">\n            <span class="MovieCardTitle dark-mode">').concat(e.title,"\n          </span>\n           ").concat(t.splice(0,3).join(", ")," | ").concat(e.release_date.slice(0,4),"\n          </p>\n        </div>\n      </div>"));var r=document.querySelectorAll(".MovieCard"),a=!0,o=!1,i=void 0;try{for(var c,u=r[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){c.value.addEventListener("click",(function(){movieId=this.id}))}}catch(e){o=!0,i=e}finally{try{a||null==u.return||u.return()}finally{if(o)throw i}}}(e,(n=e.genre_ids,r=t,a=[],n.forEach((function(e){var t=r.find((function(t){return t.id===e})).name;void 0!==t&&a.push(t)})),a))}))}document.addEventListener("DOMContentLoaded",u())}();
//# sourceMappingURL=index.8ded11d6.js.map
