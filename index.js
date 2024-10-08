import { createCharacterCard } from "./components/card/card.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";
import { createShowAllButton } from "./components/show-all-button/show-all-button.js";
import { updatePagination } from "./components/nav-pagination/nav-pagination.js";
import { setupNextButton } from "./components/nav-button/nav-button.js";
import { setupPrevButton } from "./components/nav-button/nav-button.js";


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


const noResultsMessage = document.createElement("p");
noResultsMessage.textContent = "<<< No results found ! >>>";
noResultsMessage.style.display = "none"; 
main.append(noResultsMessage);

// States
let maxPage = 42;
let searchQuery = "";
let pageIndex = 1;

prevButton.setAttribute("disabled", "disabled");

async function fetchCharacters(pageIndex, searchQuery = "") {
  const existingCharacterContainer = document.querySelector(".character-container");
  if (existingCharacterContainer) {
    existingCharacterContainer.remove();
  }
  const existingSearchBar = document.querySelector(".search-bar-container");
  if (!existingSearchBar) {

  createSearchBar((event) => {
    event.preventDefault();
    const inputText = event.target.elements.query.value;
    searchQuery = "&name=" + inputText;
    fetchCharacters(1, searchQuery);
    prevButton.setAttribute("disabled", "disabled");
    nextButton.setAttribute("disabled", "disabled");
    pagination.textContent = "1 / 1";
    showAllButton.style.display = "block";
  });
  }

  const showAllButton = createShowAllButton(main, fetchCharacters);

  const charactersData = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageIndex}${searchQuery}`
  );
  const data = await charactersData.json();

  if (!data.results || data.results.length === 0) {
    noResultsMessage.style.display = "block"; 
    pagination.style.display = "none"; 
    prevButton.style.display = "none"; 
    nextButton.style.display = "none"; 
    return; 
  } else {
    noResultsMessage.style.display = "none"; 
    pagination.style.display = "block"; 
    prevButton.style.display = "block"; 
    nextButton.style.display = "block"; 
  }

  const characterContainer = document.createElement("div");
  characterContainer.classList.add("character-container");

  maxPage = data.info.pages;
  data.results.forEach((element) => {
    const characterImage = element.image;
    const characterName = element.name;
    const characterStatus = element.status;
    const characterType = element.type;
    const characterOccurrences = element.episode.length;
    const characterCard = createCharacterCard(
      characterImage,
      characterName,
      characterStatus,
      characterType,
      characterOccurrences
    );
    characterContainer.append(characterCard);
  });
  main.append(characterContainer);
  updatePagination(pageIndex, maxPage, prevButton, nextButton, pagination);
}

fetchCharacters(pageIndex, searchQuery);

setupNextButton(nextButton, pageIndex, maxPage, fetchCharacters, updatePagination, pagination, prevButton);
setupPrevButton(prevButton, pageIndex, maxPage, fetchCharacters, updatePagination, pagination, nextButton);