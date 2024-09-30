export function updatePagination(pageIndex, maxPage, prevButton, nextButton, paginationElement) {
    paginationElement.textContent = ` << ${pageIndex} / ${maxPage} >> `;
    prevButton.disabled = pageIndex === 1; 
    nextButton.disabled = pageIndex === maxPage; 
  }
  