//
const paginationNumbers = document.getElementById('Pagination-Numbers');
// const paginatedList = document.getElementById('Paginated-List');
// const listItems = paginatedList.querySelectorAll('li');
const nextButton = document.getElementById('Next-Button');
const prevButton = document.getElementById('Prev-Button');

// const paginationLimit = 3;
// const pageCount = Math.ceil(listItems.length / paginationLimit);
const pageCount = 20;
let currentPage = 1;
//how many items we want displayed on each page
// const paginationLimit = 20;

// const pageCount = 10;
//   how many pages there will be based on the paginationLimit
//   const pageCount = Math.ceil(listItems.length / paginationLimit);
// const pageCount = totalPages;
// const totalPages = 10;

//  store the value of the currentPage

// const totalPagesArr = Array.from(Array(totalPages).keys());
// console.log('🚀 ~ totalPagesArr', totalPagesArr);

//ADD PAGE NUMBERS FUNCTION
function appendPageNumber(index) {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'Pagination-Btn';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);
  paginationNumbers.appendChild(pageNumber);
}
export function getPaginationNumbers(pageCount) {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
}

//set active page number
const handleActivePageNumber = () => {
  document.querySelectorAll('.Pagination-Btn').forEach(button => {
    button.classList.remove('Pagination-Btn--Active');

    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex == currentPage) {
      button.classList.add('Pagination-Btn--Active');
    }
  });
};

// DISPLAY ACTIVE PAGE
//RANGE FOR ITEMS TO BE SHOWN
export function setCurrentPage(pageNum) {
  currentPage = pageNum;
  handleActivePageNumber();
  handlePageButtonsStatus();

  // const prevRange = (pageNum - 1) * paginationLimit;
  // const currRange = pageNum * paginationLimit;
  // listItems.forEach((item, index) => {
  //   item.classList.add('hidden');
  //   if (index >= prevRange && index < currRange) {
  //     item.classList.remove('hidden');
  //   }
  // });
  // totalPagesArr.forEach((item, index) => {
  //   elementContainer.innerHTML = '';
  //   if (index >= prevRange && index < currRange) {
  //     elementContainer.appendChild(item);
  //   }
  // });
}

//set the current page as page 1 once the webpage loads
//add page number buttons event listners

window.addEventListener('load', () => {
  // getPaginationNumbers(20);
  setCurrentPage(1);

  prevButton.addEventListener('click', () => {
    setCurrentPage(currentPage - 1);
  });
  nextButton.addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll('.Pagination-Btn').forEach(button => {
    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex) {
      button.addEventListener('click', () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

//Disable Page Navigation Buttons
const disableButton = button => {
  button.classList.add('Disabled');
  button.setAttribute('Disabled', true);
};
const enableButton = button => {
  button.classList.remove('Disabled');
  button.removeAttribute('Disabled');
};
const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};
