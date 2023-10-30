require("dotenv").config();

// Print out value of API key stored in .env file

async function getImage(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${this.query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data.data[0].url);
  } catch (error) {
    console.log(error);
  }
}

console.log(process.env.API_KEY);
getImage("cat");
