const e=document.getElementById("Pagination-Numbers"),t=document.getElementById("Paginated-List").querySelectorAll("li"),n=document.getElementById("Next-Button"),i=document.getElementById("Prev-Button"),a=Math.ceil(t.length/3);let d=1;function s(t){const n=document.createElement("button");n.className="Pagination-Btn",n.innerHTML=t,n.setAttribute("page-index",t),n.setAttribute("aria-label","Page "+t),e.appendChild(n)}const c=e=>{d=e,document.querySelectorAll(".Pagination-Btn").forEach((e=>{e.classList.remove("Pagination-Btn--Active"),Number(e.getAttribute("page-index"))==d&&e.classList.add("Pagination-Btn--Active")})),r();const n=3*(e-1),i=3*e;t.forEach(((e,t)=>{e.classList.add("hidden"),t>=n&&t<i&&e.classList.remove("hidden")}))};window.addEventListener("load",(()=>{!function(){for(let e=1;e<=a;e++)s(e)}(),c(1),i.addEventListener("click",(()=>{c(d-1)})),n.addEventListener("click",(()=>{c(d+1)})),document.querySelectorAll(".Pagination-Btn").forEach((e=>{const t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(()=>{c(t)}))}))}));const l=e=>{e.classList.add("Disabled"),e.setAttribute("Disabled",!0)},o=e=>{e.classList.remove("Disabled"),e.removeAttribute("Disabled")},r=()=>{1===d?l(i):o(i),a===d?l(n):o(n)};
//# sourceMappingURL=index.ed7a7fa6.js.map