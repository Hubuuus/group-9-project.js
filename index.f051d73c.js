!function(){function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r={},o=t.parcelRequired89d;null==o&&((o=function(n){if(n in e)return e[n].exports;if(n in r){var t=r[n];delete r[n];var o={id:n,exports:{}};return e[n]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,t){r[n]=t},t.parcelRequired89d=o);var a=o("bpxeT"),i=o("2TvXO"),c=o("dIxxU");var u,s=o("l5bVx"),f=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,h=m||g||Function("return this")(),b=Object.prototype.toString,y=Math.max,_=Math.min,x=function(){return h.Date.now()};function w(t){var e=void 0===t?"undefined":n(s)(t);return!!t&&("object"==e||"function"==e)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(s)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==b.call(t)}(t))return NaN;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var r=l.test(t);return r||p.test(t)?v(t.slice(2),r?2:8):d.test(t)?NaN:+t}u=function(n,t,e){var r,o,a,i,c,u,s=0,f=!1,d=!1,l=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function p(t){var e=r,a=o;return r=o=void 0,s=t,i=n.apply(a,e)}function v(n){return s=n,c=setTimeout(g,t),f?p(n):i}function m(n){var e=n-u;return void 0===u||e>=t||e<0||d&&n-s>=a}function g(){var n=x();if(m(n))return h(n);c=setTimeout(g,function(n){var e=t-(n-u);return d?_(e,a-(n-s)):e}(n))}function h(n){return c=void 0,l&&r?p(n):(r=o=void 0,i)}function b(){var n=x(),e=m(n);if(r=arguments,o=this,u=n,e){if(void 0===c)return v(u);if(d)return c=setTimeout(g,t),p(u)}return void 0===c&&(c=setTimeout(g,t)),i}return t=T(t)||0,w(e)&&(f=!!e.leading,a=(d="maxWait"in e)?y(T(e.maxWait)||0,t):a,l="trailing"in e?!!e.trailing:l),b.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=u=o=c=void 0},b.flush=function(){return void 0===c?i:h(x())},b};var j,O="28e7de8a02a020e11a900cecedfaedb8",k=document.querySelector(".gallery"),M=document.querySelector(".SearchInput");M.addEventListener("input",n(u)((j=n(a)(n(i).mark((function t(e){var r;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),r=M.value.trim(),L(r);case 3:case"end":return n.stop()}}),t)}))),function(n){return j.apply(this,arguments)}),500));var L=function(){var t=n(a)(n(i).mark((function t(e){var r,o,a,u=arguments;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:1,o="https://api.themoviedb.org/3/search/movie?api_key=".concat(O,"&query=").concat(e,"&page=").concat(r),n.next=4,c.default.get(o).then((function(n){return N(n),n})).catch((function(n){console.log(n)}));case 4:return a=n.sent,console.log("Response",a),n.abrupt("return",a);case 7:case"end":return n.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function N(n){k.innerHTML="";var t=n.data.results;S().then((function(n){t.map((function(n){!function(n){var t="https://image.tmdb.org/t/p/w500".concat(n.poster_path);k.insertAdjacentHTML("beforeend",' <div class="movie-card" id="'.concat(n.id,'">\n        <img src="').concat(t,'" alt="').concat(n.title,'" loading="lazy" /> \n        <div class="movie-card__info">\n          <p class="movie-card__data">\n            <span class="movie-card__title">').concat(n.title,'\n          </span>\n           "//$//{genresName}" | ').concat(n.release_date.slice(0,4),"\n          </p>\n        </div>\n      </div>"))}(n)}))}))}var E=function(){var t=n(a)(n(i).mark((function t(){var e,r;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(O,"&page=1"),n.next=3,c.default.get(e).then((function(n){return n})).catch((function(n){console.log(n)}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=n(a)(n(i).mark((function t(){var e,r;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(O),n.next=3,c.default.get(e).then((function(n){return n.data.genres})).catch((function(n){console.log(n)}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();!function(){var t=n(a)(n(i).mark((function t(e){var r,o;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(O,"&language=en-US"),n.next=3,c.default.get(r).then((function(n){return console.log(n.data),n.data})).catch((function(n){console.log(n)}));case 3:return o=n.sent,n.abrupt("return",o);case 5:case"end":return n.stop()}}),t)})))}();document.addEventListener("DOMContentLoaded",void S().then((function(n){var t=n;console.log(t),E().then((function(n){var e=n.data.results;console.log(n.data.results),function(n,t){n.map((function(n){var e=function(n,t){return t.reduce((function(t,e){return n.genre_ids.includes(e.id)&&t.push(e.name),t}),[])}(n,t);!function(n,t){var e="https://image.tmdb.org/t/p/w500".concat(n.poster_path);k.insertAdjacentHTML("beforeend",' <div class="movie-card" id="'.concat(n.id,'">\n        <img src="').concat(e,'" alt="').concat(n.title,'" loading="lazy" /> \n        <div class="movie-card__info">\n          <p class="movie-card__data">\n            <span class="movie-card__title">').concat(n.title,"\n          </span>\n           ").concat(t.splice(0,3).join(", ")," | ").concat(n.release_date.slice(0,4),"\n          </p>\n        </div>\n      </div>"))}(n,e)}))}(e,t)}))})))}();
//# sourceMappingURL=index.f051d73c.js.map
