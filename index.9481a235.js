!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequired89d;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired89d=a);var o=a("bpxeT"),c=a("2TvXO"),u=a("dIxxU"),i=document.querySelector(".gallery");document.querySelector(".gallery");var s,d="28e7de8a02a020e11a900cecedfaedb8",l=document.querySelector(".search-input"),f=(s=e(o)(e(c).mark((function n(){var t,r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/search/movie?api_key=".concat(d,"&query=").concat(l,"&page=1"),e.next=3,u.default.get(t).then((function(e){return e})).catch((function(e){console.log(e)}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)}))),function(){var n=e(o)(e(c).mark((function n(){var t,r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(d,"&page=1"),e.next=3,u.default.get(t).then((function(e){return e})).catch((function(e){console.log(e)}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()),p=function(){var n=e(o)(e(c).mark((function n(){var t,r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(d),e.next=3,u.default.get(t).then((function(e){return e.data.genres})).catch((function(e){console.log(e)}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(function(){var n=e(o)(e(c).mark((function n(t){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(d,"&language=en-US"),e.next=3,u.default.get(r).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),n)})))})(),document.querySelector(".gallery");document.addEventListener("DOMContentLoaded",void p().then((function(e){var n=e;console.log(n),f().then((function(e){var t=e.data.results;console.log(e.data.results),function(e,n){e.map((function(e){var t=function(e,n){return n.reduce((function(n,t){return e.genre_ids.includes(t.id)&&n.push(t.name),n}),[])}(e,n);!function(e,n){var t="https://image.tmdb.org/t/p/w500".concat(e.poster_path);i.insertAdjacentHTML("beforeend",' <div class="movie-card" id="'.concat(e.id,'">\n        <img src="').concat(t,'" alt="').concat(e.title,'" loading="lazy" /> \n        <div class="movie-card__info">\n          <p class="movie-card__data">\n            <span class="movie-card__title">').concat(e.title,"\n          </span>\n           ").concat(n," | ").concat(e.release_date.slice(0,4),"\n          </p>\n        </div>\n      </div>"))}(e,t)}))}(t,n)}))})))}();
//# sourceMappingURL=index.9481a235.js.map