export function createShowAllButton (main, fetchCharacters) {
    const showAllButton = document.createElement("button");
    showAllButton.textContent = "Show all characters";
    showAllButton.style.display = "none";

    showAllButton.addEventListener("click", () => {
        const searchInput = document.getElementById("search-input");
        searchInput.value = ""; 
        const pagination = document.querySelector(".navigation__pagination");
        pagination.textContent = "1 / 42";
        fetchCharacters(1);
        showAllButton.style.display = "none";
    });

    main.append(showAllButton);
    return showAllButton;

} 