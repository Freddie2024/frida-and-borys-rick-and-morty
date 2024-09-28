export function createCharacterCard(
  characterImage,
  characterName,
  characterStatus,
  characterType,
  characterOccurrences
) {
  const main = document.querySelector("main");

  const characterCard = document.createElement("li");

  characterCard.innerHTML = `

      <ul class="card-container" data-js="card-container">
        <li class="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src=${characterImage}
              alt="image of ${characterName}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${characterName}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${characterStatus}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${characterType}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${characterOccurrences}</dd>
            </dl>
          </div>
        </li>
      </ul>
      `;
  return characterCard;
}
