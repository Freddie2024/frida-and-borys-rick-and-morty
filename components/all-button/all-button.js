export function createShowAllButton (main, fetchCharacters) {
    const showAllButton = document.createElement("button");
    showAllButton.textContent = "Show all characters";
    showAllButton.style.display = "none";

    showAllButton.addEventListener("click", () => {
        fetchCharacters(1);
        showAllButton.style.display = "none";
    });

    main.append(showAllButton);

    return showAllButton;

} 