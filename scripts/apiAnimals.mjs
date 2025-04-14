import { fetchRandomAnimalImage } from "./apiAnimalsImg.mjs";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchAnimalData() {
  const cachedData = localStorage.getItem("animalData");
  if (cachedData) {
    console.log("Using cached data");
    displayAnimals(JSON.parse(cachedData));
    return;
  }

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
      animal.imageUrl = await fetchRandomAnimalImage(); //Assign the image URL to the animal object
    }

    //Cache the data in local storage
    localStorage.setItem("animalData", JSON.stringify(data));
    console.log(data); //verify the data
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

    //Generate the card content
    card.innerHTML = `
            <img src="${animal.imageUrl}" alt="${
      animal.Animal || "Animal Image"
    }" class="card-img-top rounded mb-3 img-fluid" style="height: 200px;"/>
            <div class="card-body">
                <h5 class="card-title text-center"><strong>${
                  animal.Animal
                }</strong></h5>
                <p class="text-center"><strong>Countries Found: </strong>${
                  animal["Countries Found"]
                }</p>
                <p class="text-center"><strong>Habitat: </strong>${
                  animal.Habitat
                }</p>
                <p class="text-center"><strong>Diet: </strong>${animal.Diet}</p>
                <p class="text-center"><strong>Family: </strong>${
                  animal.Family
                }</p>
                <p class="text-center"><strong>Conservation Status: </strong>${
                  animal["Conservation Status"]
                }</p>
            </div>`;

    container.appendChild(card);
  });
}
