!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired89d;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired89d=a);var i=a("bpxeT"),o=a("2TvXO"),c=a("dIxxU");var u=a("l1Gdk");var s=document.querySelector(".Gallery"),d="28e7de8a02a020e11a900cecedfaedb8",l=document.querySelector(".SearchInput"),p=document.querySelector('[data-header="alert"]');var f,v=(f=e(i)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,c.default.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:d}}).then((function(e){return e})).catch((function(e){console.log(e)}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),t)}))),function(){return f.apply(this,arguments)});l.addEventListener("keypress",(function(t){if("Enter"===t.key){t.preventDefault();var n=l.value.trim();h(n)}else l.addEventListener("input",e(u)(function(){var t=e(i)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r=n.target.value.trim(),h(r);case 3:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),1e3))}));var h=function(){var t=e(i)(e(o).mark((function t(n,r){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie",e.next=3,c.default.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:d,query:n,page:r}}).then((function(e){return m(e),p.classList.add("hidden"),0===e.data.results.length&&p.classList.remove("hidden"),e})).catch((function(){console.log("error")}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();function m(e){s.innerHTML="";var t=e.data.results;g().then((function(e){y(t,e)}))}var g=function(){var t=e(i)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/genre/movie/list",e.next=3,c.default.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:d}}).then((function(e){return e.data.genres})).catch((function(e){console.log(e)}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function y(e,t){e.map((function(e){var n,r,a;!function(e,t){var n="https://image.tmdb.org/t/p/w500".concat(e.poster_path);s.insertAdjacentHTML("beforeend",' <div class="MovieCard" id="'.concat(e.id,'">\n        <img src="').concat(n,'" <img class ="MoviePoster" src="').concat(n,'" \n        onerror="this.src=\'https://ik.imagekit.io/paulinas/noTMDBposter.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676735394520\'" \n        alt="').concat(e.title,'" loading="lazy" /> \n        <div class="MovieCardInfo">\n          <p class="MovieCardData">\n            <span class="MovieCardTitle">').concat(e.title,"\n          </span>\n           ").concat(t.splice(0,3).join(", ")," | ").concat(e.release_date.slice(0,4),"\n          </p>\n        </div>\n      </div>"));var r=document.querySelectorAll(".MovieCard"),a=!0,i=!1,o=void 0;try{for(var c,u=r[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){c.value.addEventListener("click",(function(){this.id}))}}catch(e){i=!0,o=e}finally{try{a||null==u.return||u.return()}finally{if(i)throw o}}}(e,(n=e.genre_ids,r=t,a=[],n.forEach((function(e){var t=r.find((function(t){return t.id===e})).name;void 0!==t&&a.push(t)})),a))}))}document.addEventListener("DOMContentLoaded",void g().then((function(e){var t=e;v().then((function(e){y(e.data.results,t)}))})))}();
//# sourceMappingURL=index.2fcc76e3.js.map
