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
      const cardFlip = document.createElement("div");
      cardFlip.classList.add("card-flip");

      cardFlip.classList.add(
        "card",
        "mb-4",
        "mx-auto",
        "border-primary",
        "text-primary",
        "bg-transparent"
      );

      cardFlip.style.width = "18rem";
      cardFlip.style.padding = "16px";

      cardFlip.innerHTML = `
        <div class="card-inner">
          <div class="card-front">
              <img src="${animal.image}" alt="${animal.alt}" class="card-img-top rounded mb-3 img-fluid" style="height: 200px;"/>
              <h5 class="card-title text-center">${animal.name}</h5>
          </div>
          <div class="card-back">
            <div class="card-content">
              <p class="text-center"><strong>Name:</strong>${animal.name}</p>
              <p class="text-center"><strong>Scientific Name:</strong>${animal.scientific_name}</p>
              <p class="text-center"><strong>Habitat:</strong>${animal.habitat}</p>
              <p class="text-center"><strong>Description:</strong>${animal.description}</p>
            </div>
          </div>
        </div>`;

      // Add the card to the container
      speciesContainer.appendChild(cardFlip);
    });
  } catch (error) {
    console.error("Error loading species:", error);
  }
}
