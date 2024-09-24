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
const maxPage = 1;
const page = 1;
const searchQuery = "";


async function fetchCharacters() {
  const charactersData = await fetch("https://rickandmortyapi.com/api/character");
  const data = await charactersData.json();
  console.log(data)
  data.results.forEach(element => {
    const imageLink = element.image;
    const characterName = element.name;
    const characterStatus = element.status;
    const characterType = element.type;
    const characterOccurrences = element.episode.length;
    createCharacterCard(imageLink, characterName, characterStatus, characterType, characterOccurrences)
  });
}
fetchCharacters()