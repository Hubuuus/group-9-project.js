!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequired89d;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequired89d=a);var o=a("bpxeT"),i=a("2TvXO"),c=a("dIxxU");function u(t){_().then((function(e){var n=e;document.querySelector(".Gallery").innerHTML="",M(t).then((function(t){A(t.data.results,n)}))}))}var s=a("l1Gdk");var d=document.querySelector(".Gallery"),l="28e7de8a02a020e11a900cecedfaedb8",f=document.querySelector(".SearchInput"),v=document.querySelector('[data-header="alert"]'),p=document.getElementById("Next-Button"),m=document.getElementById("Prev-Button"),h=document.getElementById("Pagination-Numbers"),g=1;var b=function(t){t.classList.add("Disabled"),t.setAttribute("Disabled",!0)},y=function(t){t.classList.remove("Disabled"),t.removeAttribute("Disabled")},L=function(t,e){1===t?b(m):y(m),t===e?b(p):y(p)},k=function(t){document.querySelectorAll(".Nr-Button").forEach((function(t){t.classList.remove("Pagination-Btn--Active")})),document.querySelectorAll(".Nr-Button").forEach((function(e){Number(e.textContent)==t&&e.classList.add("Pagination-Btn--Active")}))},x=function(){h.insertAdjacentHTML("beforeend",'\n      <button class="Pagination-Btn Pagination-Btn__Dots" id="Nr-Button">\n      ...\n      </button>\n    ')},w=function(t){var e=t===g?"Pagination-Btn--Active":"";h.insertAdjacentHTML("beforeend",'\n      <button class="Pagination-Btn Nr-Button '.concat(e,'" id="Nr-Button" >\n      ').concat(t,"\n      </button>\n    "))},B=function(t,e){if(h.innerHTML="",t<=5){for(var n=1;n<=7;n++)w(n);x(),w(e)}else if(t>=e-5){w(1),x();for(var r=e-6;r<=e;r++)w(r)}else{w(1),x();for(var a=t-2;a<=t+2;a++)w(a);x(),w(e)}};window.addEventListener("load",(function(){L(1),B(1),k(g),p.addEventListener("click",(function(t){t.preventDefault(),u(++g),L(g),B(g),k(g)})),m.addEventListener("click",(function(t){t.preventDefault(),u(--g),L(g),B(g),k(g)})),h.addEventListener("click",(function(t){if(t.target.classList.contains("Nr-Button")){var e=Number(t.target.textContent);e!==g&&(u(g=e),L(g),B(g),k(g))}}))}));var E,M=(E=t(o)(t(i).mark((function e(n){var r;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,c.default.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:l,page:n}}).then((function(t){var e=t.data.total_pages/10;return B(g,e),L(g,e),t})).catch((function(t){console.log(t)}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),e)}))),function(t){return E.apply(this,arguments)});f.addEventListener("keypress",(function(t){"Enter"===t.key&&t.preventDefault()})),f.addEventListener("input",t(s)(function(){var e=t(o)(t(i).mark((function e(n){var r;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!=f.value){t.next=3;break}return t.abrupt("return",location.reload());case 3:r=n.target.value.trim(),D(r);case 5:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),1e3));var D=function(){var e=t(o)(t(i).mark((function e(n){var r;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/search/movie",t.next=3,c.default.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:l,query:n}}).then((function(t){return T(t),v.classList.add("hidden"),0===t.data.results.length&&v.classList.remove("hidden"),t})).catch((function(){console.log("error")}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function T(t){d.innerHTML="";var e=t.data.results;_().then((function(t){A(e,t)}))}var _=function(){var e=t(o)(t(i).mark((function e(){var n;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/genre/movie/list",t.next=3,c.default.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:l}}).then((function(t){return t.data.genres})).catch((function(t){console.log(t)}));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function A(t,e){t.map((function(t){var n,r,a;!function(t,e){var n="https://image.tmdb.org/t/p/w500".concat(t.poster_path);d.insertAdjacentHTML("beforeend",' <div class="MovieCard" id="'.concat(t.id,'">\n        <img src="').concat(n,'" <img class ="MoviePoster" src="').concat(n,'" \n        onerror="this.src=\'https://ik.imagekit.io/paulinas/noTMDBposter.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676735394520\'" \n        alt="').concat(t.title,'" loading="lazy" /> \n        <div class="MovieCardInfo">\n          <p class="MovieCardData">\n            <span class="MovieCardTitle dark-mode">').concat(t.title,"\n          </span>\n           ").concat(e.splice(0,3).join(", ")," | ").concat(t.release_date.slice(0,4),"\n          </p>\n        </div>\n      </div>"));var r=document.querySelectorAll(".MovieCard"),a=!0,o=!1,i=void 0;try{for(var c,u=r[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){c.value.addEventListener("click",(function(){movieId=this.id}))}}catch(t){o=!0,i=t}finally{try{a||null==u.return||u.return()}finally{if(o)throw i}}}(t,(n=t.genre_ids,r=e,a=[],n.forEach((function(t){var e=r.find((function(e){return e.id===t})).name;void 0!==e&&a.push(e)})),a))}))}document.addEventListener("DOMContentLoaded",u())}();
//# sourceMappingURL=index.b8c12693.js.map
