// export function renderPagination(totalPages, totalResults) {
const paginationNumbers = document.getElementById('pagination-numbers');
const paginatedList = document.getElementById('paginated-list');
const listItems = paginatedList.querySelectorAll('li');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

//how many items we want displayed on each page
const paginationLimit = 20;

//   how many pages there will be based on the paginationLimit
//   const pageCount = Math.ceil(listItems.length / paginationLimit);
const pageCount = totalPages;

//  store the value of the currentPage
let currentPage;

let totalPagesArr = Array.from(Array(totalPages).keys());

//ADD PAGE NUMBERS FUNCTION
function appendPageNumber(index) {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);
  paginationNumbers.appendChild(pageNumber);
}
function getPaginationNumbers() {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
}

//
window.addEventListener('load', () => {
  getPaginationNumbers();
});

// DISPLAY ACTIVE PAGE
//RANGE FOR ITEMS TO BE SHOWN
const setCurrentPage = pageNum => {
  currentPage = pageNum;
  handleActivePageNumber();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  //   listItems.forEach((item, index) => {
  //     item.classList.add('hidden');
  //     if (index >= prevRange && index < currRange) {
  //       item.classList.remove('hidden');
  //     }
  //   });
  totalPagesArr.forEach((item, index) => {
    elementContainer.innerHTML = '';
    if (index >= prevRange && index < currRange) {
      elementContainer.appendChild(item);
    }
  });
};

//set the current page as page 1 once the webpage loads
window.addEventListener('load', () => {
  getPaginationNumbers();
  setCurrentPage(1);
});

// //add page number buttons event listners

// window.addEventListener('load', () => {
//   getPaginationNumbers();
//   setCurrentPage(1);
//   document.querySelectorAll('.pagination-number').forEach(button => {
//     const pageIndex = Number(button.getAttribute('page-index'));
//     if (pageIndex) {
//       button.addEventListener('click', () => {
//         setCurrentPage(pageIndex);
//       });
//     }
//   });
// });

// //set active page number
// const handleActivePageNumber = () => {
//   document.querySelectorAll('.pagination-number').forEach(button => {
//     button.classList.remove('active');

//     const pageIndex = Number(button.getAttribute('page-index'));
//     if (pageIndex == currentPage) {
//       button.classList.add('active');
//     }
//   });
// };
// // }
