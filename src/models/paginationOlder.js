const paginationButton = document.querySelector('Pagination-Btn');
// FUNCTION CREATING HTML DIVS WITH PAGE NUMBERS
export function renderPagination(totalPages) {
  const paginationContainer = document.querySelector(
    '.Pagination-Container__Middle'
  );

  let allPages = Array.from(Array(totalPages).keys());

  const middlePage = allPages[Math.round((allPages.length + 1) / 2)];
  paginationContainer.innerHTML = '';

  if (allPages.length < 11) {
    for (const page of allPages) {
      //   console.log(page);
      const markupMiddle = `
              <button class="Pagination-Btn">${page + 1}</button>
              `;
      paginationContainer.innerHTML += markupMiddle;
      //   console.log(typeof document.querySelector('.Pagination-Btn').value);
    }
  } else {
    const markupMiddle = `

            <button class="Pagination-Btn Pagination-Btn--Active">${
              allPages[1]
            }</button>
            <button class="Pagination-Btn Pagination-Btn__Dots">...</button>
            <button class="Pagination-Btn">${middlePage - 2}</button>
            <button class="Pagination-Btn">${middlePage - 1}</button>
            <button class="Pagination-Btn">${middlePage}</button>
            <button class="Pagination-Btn">${middlePage + 1}</button>
            <button class="Pagination-Btn">${middlePage + 2}</button>
            <button class="Pagination-Btn Pagination-Btn__Dots">...</button>
            <button class="Pagination-Btn">${allPages.slice(-1)[0] + 1}</button>
            `;
    paginationContainer.innerHTML = markupMiddle;
  }
  //   paginationContainer.innerHTML += markupRight;
}

// HIGHLIGHT PRESENT PAGE NUMBER
export function highlightPageNumber(pickedPage) {
  if (
    document.querySelector('.Pagination-Btn').value === pickedPage.toString()
  ) {
    document
      .querySelector('.Pagination-Btn')
      .classList.add('Pagination-Btn--Active');
  }
}

// FUNCTION HANDLING PAGINATION BUTTONS
export function clickPaginationBtn(pickedPage) {
  return pickedPage;
}
// document
//   .querySelector('Pagination-Btn')
//   .addEventListener('click', clickPaginationBtn());
