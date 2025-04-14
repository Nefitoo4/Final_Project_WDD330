// const unsplashUrl = "https://api.unsplash.com/search/photos";
// const unsplashKey = "WzQhq6RGbkGPoCvNGeDbVadYqM9tsppAEwe3hUwUjsM";

// export async function fetchUnsplashImages(query) {
//   try {
//     const response = await fetch(
//       `${unsplashUrl}?query=${query}&client_id=${unsplashKey}`,
//       {
//         method: "GET",
//       }
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Unsplash API response", data); // Verify the data
//     return data.results; // Return the array of image results
//   } catch (error) {
//     console.error("Error fetching Unsplash images:", error);
//     return []; // Return an empty array in case of error
//   }
// }
