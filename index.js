import { createCharacterCard } from "./components/card/card.js";

import { createSearchBar } from "./components/search-bar/search-bar.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const main = document.querySelector("main");

// States
let maxPage;
let searchQuery = "";
let pageIndex = 1;

prevButton.setAttribute("disabled", "disabled");

async function fetchCharacters(pageIndex, searchQuery = "") {
  main.innerHTML = ` `;
  createSearchBar((event) => {
    event.preventDefault();
    const inputText = event.target.elements.query.value;
    searchQuery = "&name=" + inputText;
    fetchCharacters(1, searchQuery);
    prevButton.setAttribute("disabled", "disabled");
    nextButton.setAttribute("disabled", "disabled");
    pagination.textContent = "1 / 1";
  });
  const charactersData = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageIndex}${searchQuery}`
  );
  const data = await charactersData.json();

  maxPage = data.info.pages;
  data.results.forEach((element) => {
    const imageLink = element.image;
    const characterName = element.name;
    const characterStatus = element.status;
    const characterType = element.type;
    const characterOccurrences = element.episode.length;
    createCharacterCard(
      imageLink,
      characterName,
      characterStatus,
      characterType,
      characterOccurrences
    );
  });
}

fetchCharacters(pageIndex, searchQuery);

nextButton.addEventListener("click", () => {
  main.innerHTML = ` `;

  if (pageIndex <= maxPage) {
    pageIndex++;
    fetchCharacters(pageIndex);
    prevButton.removeAttribute("disabled");
    pagination.textContent = pageIndex + " / 42";
    if (pageIndex == maxPage) {
      console.log("reached last page");
      return nextButton.setAttribute("disabled", "disabled");
    }
    console.log(pageIndex);
  }
});

prevButton.addEventListener("click", () => {
  const main = document.querySelector("main");
  main.innerHTML = ` `;

  if (pageIndex >= 1) {
    pageIndex--;
    fetchCharacters(pageIndex);
    nextButton.removeAttribute("disabled");
    pagination.textContent = pageIndex + " / 42";
    if (pageIndex == 1) {
      console.log("reached first page");
      return prevButton.setAttribute("disabled", "disabled");
    }
  }
});
