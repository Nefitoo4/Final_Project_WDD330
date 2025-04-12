//Animal API Fetch
// const url = "https://animals7.p.rapidapi.com/api/animals?animal=Tiger";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "38b719fdd9msh131ad99377d551ep1a7e6cjsnca4b3164b4ae",
//     "x-rapidapi-host": "animals7.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

//Import the loadSpecies function form species.mjs
import { loadSpecies } from "./species.mjs";

//Call the function to load species data
loadSpecies();
