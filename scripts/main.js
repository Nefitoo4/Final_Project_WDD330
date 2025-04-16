import { fetchAnimalData } from "./apiAnimals.mjs";
//import { fetchUnsplashImages } from "./unsplash.mjs";
//Call the function to fetch animal data
fetchAnimalData();

//Import the loadSpecies function form species.mjs
import { loadSpecies } from "./species.mjs";

//Call the function to load species data
loadSpecies();

// async function loadAnimalsWithImages() {
//   try {
//     // Fetch animal data
//     const animals = await fetchAnimalData();

//     //Iterate over each animal and fetch images
//     for (const animal of animals) {
//       const images = await fetchUnsplashImages(animal.name);
//       if (images.lenght > 0) {
//         animal.image = images[0].urls.small;
//       } else {
//         animal.image = "./images/default.jpg";
//       }
//     }

//     //Call the function to load animals with images
//     displayAnimals(animals);
//   } catch (error) {
//     console.error("Error loading animals with images:", error);
//   }
// }

// Event listener for the search button
document.getElementById("search-button").addEventListener("click", async () => {
  const searchInput = document.getElementById("search-input").value.trim(); // Get the search input value
  if (!searchInput) {
    alert("Please enter a search term.");
    return;
  }

  // Fetch animal data based on the search input
  await fetchAnimalData(searchInput);
});
