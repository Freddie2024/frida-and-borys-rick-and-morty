export function createSearchBar(onSubmit) {
  const main = document.querySelector("main");
  const searchBar = document.createElement("div");
  searchBar.classList.add("search-bar-container");
  searchBar.setAttribute("data-js", "search-bar-container");
  searchBar.innerHTML = `
        <form action="" class="search-bar" data-js="search-bar">
          <input
          id="search-input"
            name="query"
            class="search-bar__input"
            type="text"
            placeholder="search characters"
            aria-label="character name"
          />
          <button class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/magnifying-glass.png"
              alt=""
            />
          </button>
        </form>
    `;

  main.append(searchBar);
  const form = document.querySelector('[data-js="search-bar"]');
  form.addEventListener("submit", onSubmit);
}
