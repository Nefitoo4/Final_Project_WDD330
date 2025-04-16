const url =
  "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/fluximagegenerate/generateimage.php";
const optionsTemplate = {
  method: "POST",
  headers: {
    "x-rapidapi-key": "38b719fdd9msh131ad99377d551ep1a7e6cjsnca4b3164b4ae",
    "x-rapidapi-host":
      "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export async function generateImage(prompt) {
  const options = {
    ...optionsTemplate,
    body: new URLSearchParams({
      prompt: prompt, // Animal name
      width: "1024",
      height: "1024",
      seed: "918440",
      model: "flux",
    }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Process the response as blob or needed format
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob); //Create a URL for the image blob
    console.log("Generated Image result:", imageUrl);
    return imageUrl; // Return the image URL
  } catch (error) {
    console.error("Error generating image:", error.message || error);
    return "./images/default.jpg"; // Return a default image URL in case of error
  }
}
