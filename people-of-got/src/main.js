import { got } from "./got-data.js";

let selectedHouse = "All";
let searchCharacter = "";

// Flatten the houses and their people into one array
const allPeople = got.houses.flatMap((house) =>
  house.people.map((person) => ({
    ...person,
    house: house.name,
  }))
);

// Select HTML elements
const houseContainer = document.querySelector("#house-filters");
const characterContainer = document.querySelector("#character-containers");

// NEW: Select the search input
const searchInput = document.querySelector("#search");

function renderHouseFilters() {
  const houses = got.houses.map((house) => house.name);

  houseContainer.innerHTML = houses.map(
    (house) => `
      <button class="house-btn ${selectedHouse === house ? "active" : ""}" data-house="${house}">
        ${house.toUpperCase()}
      </button>
    `
  ).join("");
}

function renderCharacters() {
  const filteredPeople = allPeople.filter((person) => {
    const matchesHouse =
      selectedHouse === "All" || person.house === selectedHouse;

    const matchesSearch = person.name
      .toLowerCase()
      .includes(searchCharacter.toLowerCase());

    return matchesHouse && matchesSearch;
  });

  characterContainer.innerHTML = filteredPeople
    .map(
      (person) => `
        <article class="character-card">
          <img
            src="${person.image}"
            alt="${person.name}"
            class="character-image"
          />

          <h2>${person.name}</h2>

          <p>${person.description}</p>

          <a
            href="${person.wikiLink}"
            target="_blank"
            rel="noopener noreferrer"
            class="know-more-btn"
          >
            KNOW MORE!
          </a>
        </article>
      `
    )
    .join("");
}

houseContainer.addEventListener("click", (event) => {
  const clickedButton = event.target.closest(".house-btn");

  if (!clickedButton) return;

  selectedHouse = clickedButton.dataset.house;

  renderHouseFilters();
  renderCharacters();
});


searchInput.addEventListener("input", (event) => {
  searchCharacter = event.target.value;

  renderCharacters();
});

// Initial rendering
renderHouseFilters();
renderCharacters();