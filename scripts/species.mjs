// Function to load species data from the JSON file
export async function loadSpecies() {
  // Select the container where the species will be displayed
  const speciesContainer = document.querySelector("#species-container");
  try {
    // Load the JSON file
    const response = await fetch("./data/species.json");
    const species = await response.json();

    // Generate HTML for each species and append to the container
    species.forEach((animal) => {
      const speciesCard = document.createElement("div");
      speciesCard.classList.add(
        "card",
        "mb-4",
        "mx-auto",
        "border-primary",
        "text-primary",
        "bg-transparent"
      );
      speciesCard.style.width = "18rem";
      speciesCard.style.padding = "16px";

      speciesCard.innerHTML = `
            <img src="${animal.image}" alt="${animal.alt}" class="card-img-top rounded mb-3 img-fluid" style="height: 200px; object-fit: cover;"/>
            <h5 class="card-title text-center">${animal.name}</h5>`;

      // Add the card to the container
      speciesContainer.appendChild(speciesCard);
    });
  } catch (error) {
    console.error("Error loading species:", error);
  }
}
