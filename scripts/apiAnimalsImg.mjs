// const url = "https://anilove.p.rapidapi.com/images/random";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "38b719fdd9msh131ad99377d551ep1a7e6cjsnca4b3164b4ae",
//     "x-rapidapi-host": "anilove.p.rapidapi.com",
//   },
// };

// export async function fetchRandomAnimalImage() {
//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json(); // Parse the JSON response
//     console.log("Random animal image response:", data); // Verify the data
//     return data.imageUrl; // Return the image URL
//   } catch (error) {
//     console.error("Error fetching random animal image:", error);
//     return "./images/default.jpg"; //Return default image in case of error
//   }
// }
