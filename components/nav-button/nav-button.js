import { updatePagination } from "../nav-pagination/nav-pagination.js";

export function setupNextButton(nextButton, pageIndex, maxPage, fetchCharacters, updatePagination, pagination, prevButton) {
    nextButton.addEventListener("click", () => {
      const main = document.querySelector("main");
      main.innerHTML = ` `;
  
      if (pageIndex <= maxPage) {
        pageIndex++;
        fetchCharacters(pageIndex);
        pagination.classList.add("rotate");
        setTimeout(() => {
          pagination.classList.remove("rotate");
        }, 600);
        updatePagination(pageIndex, maxPage, prevButton, nextButton, pagination);
      }
    });
  }
  
export function setupPrevButton(prevButton, pageIndex, maxPage, fetchCharacters, updatePagination, pagination, nextButton) {
    prevButton.addEventListener("click", () => {
      const main = document.querySelector("main");
      main.innerHTML = ` `;
  
      if (pageIndex >= 1) {
        pageIndex--;
        fetchCharacters(pageIndex);
        pagination.classList.add("rotate");
        setTimeout(() => {
          pagination.classList.remove("rotate");
        }, 600);
        updatePagination(pageIndex, maxPage, prevButton, nextButton, pagination);
      }
    });
  }
  