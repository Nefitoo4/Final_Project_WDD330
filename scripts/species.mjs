// Function to load species data from the JSON file
export async function loadSpecies() {
  // Select the container where the species will be displayed
  const speciesContainer = document.querySelector("#species-container");
  try {
    // Load the JSON file
    const response = await fetch("./data/species.json");
    const species = await response.json();

    speciesContainer.innerHTML = "";
    speciesContainer.classList.add("with-species"); // Agrega una clase al contenedor

    // Generate HTML for each species and append to the container
    species.forEach((animal) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.classList.add(
        "card",
        "mb-4",
        "mx-auto",
        "border-primary",
        "text-primary",
        "bg-transparent"
      );

      card.style.width = "18rem";
      card.style.padding = "16px";

      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">
              <img src="${animal.image}" alt="${animal.name} image" class="card-img-top rounded mb-3 img-fluid" style="height: 200px;"/>
              <h5 class="card-title text-center">${animal.name}</h5>
          </div>
          <div class="card-back">
            <div class="card-content">
              <p class="text-center"><strong>Name: </strong>${animal.name}</p>
              <p class="text-center"><strong>Countries Found: </strong>${animal.country}</p>
              <p class="text-center"><strong>Habitat: </strong>${animal.habitat}</p>
              <p class="text-center"><strong>Diet: </strong>${animal.diet}</p>
              <p class="text-center"><strong>Family: </strong>${animal.family}</p>
              <p class="text-center"><strong>Conservation Status: </strong>${animal.conservation_status}</p>
            </div>
          </div>
        </div>`;

      // Add the card to the container
      speciesContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading species:", error);
  }
}
