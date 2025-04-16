import { generateImage } from "./ImgGeneratorIA.mjs";

export async function fetchAnimalData(searchTerm = "") {
  // const cachedData = localStorage.getItem("animalData");
  // if (cachedData) {
  //   console.log("Using cached data");
  //   displayAnimals(JSON.parse(cachedData));
  //   return;
  // }
  if (!searchTerm || searchTerm.trim() === "") {
    displayAnimals([]); // Display a message of "No results found"
    return;
  }

  const url = `https://animals7.p.rapidapi.com/api/animals?animal=${encodeURIComponent(
    searchTerm
  )}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "38b719fdd9msh131ad99377d551ep1a7e6cjsnca4b3164b4ae",
      "x-rapidapi-host": "animals7.p.rapidapi.com",
    },
  };

  try {
    console.log("Search term:", searchTerm);
    console.log("API URL:", url);

    const response = await fetch(url, options);
    if (!response.ok) {
      if (response.status === 400) {
        console.error("Bad Request: Invalid or missing 'animal' parameter.");
      } else if (response.status === 404) {
        console.error("Not Found: No data available for the specified animal.");
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    console.log(data); //verify the data

    //Filter the data results according the search input
    const filteredData = data.filter((animal) =>
      animal.Animal.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //Generate images based on the animal name
    for (const animal of filteredData) {
      animal.imageUrl = await generateImage(animal.Animal); // Generate image URL
    }

    //Cache the data in local storage
    //localStorage.setItem("animalData", JSON.stringify(data));

    //Convert the object to an array to manage as a list of results
    displayAnimals(data);
  } catch (error) {
    console.error("Error fetching animal data:", error);

    const container = document.querySelector("#species-container");
    container.innerHTML = `<p class='text-center' text-danger'>No results found for "${searchTerm}".</p>`; // Display a message of "No results found"
  }
}

function displayAnimals(data) {
  const container = document.querySelector("#species-container");
  container.innerHTML = ""; // Clear previous content

  if (data.length === 0) {
    container.innerHTML =
      "<p class='text-center message'>Please enter a search term to find animals.</p>";
    return;
  }

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
    card.style.padding = "16px";

    //Generate the card content
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${animal.imageUrl}" alt="${
      animal.Animal || "Animal Image"
    }" class="card-img-top rounded mb-3 img-fluid" style="height: 200px;"/>
          <h5 class="card-title text-center"><strong>${
            animal.Animal
          }</strong></h5>
        </div>
        <div class="card-back">
          <div class="card-content">
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
            <p class="text-center"><strong>Family: </strong>${animal.Family}</p>
            <p class="text-center"><strong>Conservation Status: </strong>${
              animal["Conservation Status"]
            }</p>
          </div>
        </div>
      </div>`;

    // Add the card to the container
    container.appendChild(card);
  });
}
