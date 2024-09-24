import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage;
const page = 1;
const searchQuery = "";
let pageIndex = 41;

async function fetchCharacters(pageIndex) {
  const charactersData = await fetch(`https://rickandmortyapi.com/api/character?page=${pageIndex}`);
  const data = await charactersData.json();
  console.log(pageIndex)
  maxPage = data.info.pages;
  data.results.forEach(element => {
    const imageLink = element.image;
    const characterName = element.name;
    const characterStatus = element.status;
    const characterType = element.type;
    const characterOccurrences = element.episode.length;
    createCharacterCard(imageLink, characterName, characterStatus, characterType, characterOccurrences)
  });
}

fetchCharacters(pageIndex)

nextButton.addEventListener("click", () => {
  console.log(pageIndex)
  const main = document.querySelector("main");
  main.innerHTML = ` `
pageIndex++;
if (pageIndex <= maxPage) { 
return fetchCharacters(pageIndex);
} else {
   pageIndex = maxPage;
   return fetchCharacters(pageIndex);}
})

