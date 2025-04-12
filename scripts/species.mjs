// Select the container where the species will be displayed
const speciesContainer = document.querySelector("#species-container");

// Function to load species data from the JSON file
export async function loadSpecies() {
  try {
    // Load the JSON file
    const response = await fetch("./data/species.json");
    const species = await response.json();

    // Generate HTML for each species and append to the container
    species.forEach((animal) => {
      const speciesCard = document.createElement("div");
      speciesCard.classList.add("species-card", "text-center", "mb-4");
      speciesCard.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}" class="img-fluid mb-2"/>
            <h5>${animal.name}</h5>`;

      // Add the card to the container
      speciesContainer.appendChild(speciesCard);
    });
  } catch (error) {
    console.error("Error loading species:", error);
  }
}
