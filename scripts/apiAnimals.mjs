export async function fetchAnimalData() {
  const url = "https://animals7.p.rapidapi.com/api/animals?animal=Tiger";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "38b719fdd9msh131ad99377d551ep1a7e6cjsnca4b3164b4ae",
      "x-rapidapi-host": "animals7.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    //Iterate over each animal and fetch images
    for (const animal of data) {
      const images = await fetchUnsplashImages(animal.name);
      if (images.length > 0) {
        animal.image = images[0].urls.small;
      } else {
        console.warn(`No images found for ${animal.name}Using default image.`);
        animal.image = "./images/default.jpg";
      }
      // Data validation
      animal.name = animal.name || "Unknown Name";
      animal.scientific_name =
        animal.scientific_name || "Unknown Scientific Name";
      animal.habitat = animal.habitat || "Unknown Habitat";
      animal.description = animal.description || "No description available.";
    }
    console.log(data);
    displayAnimals(data);
  } catch (error) {
    console.error("Error fetching animal data:", error);
  }
}

function displayAnimals(data) {
  const container = document.querySelector("#species-container");
  container.innerHTML = ""; // Clear previous content

  data.forEach((animal) => {
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "mb-4",
      "mx-auto",
      "border-primary",
      "text-primary",
      "bg-transparent"
    );
    card.style.width = "18rem";

    card.innerHTML = `
            <img src="${animal.image}" alt="Animal Image" class="card-img-top rounded mb-3 img-fluid" style="height: 200px;"/>
            <div class="card-body">
                <h5 class="card-title text-center">${animal.name}</h5>
                <p class="text-center"><strong>Scientific Name:</strong>${animal.scientific_name}</p>
                <p class="text-center"><strong>Habitat:</strong>${animal.habitat}</p>
                <p class="text-center"><strong>Description:</strong>${animal.description}</p>
            </div>`;

    container.appendChild(card);
  });
}
