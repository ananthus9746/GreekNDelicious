const fetch = require('node-fetch');

const UNSPLASH_API_URL = 'https://api.unsplash.com/photos';
const ACCESS_KEY = 'your_unsplash_access_key'; // Replace with your Unsplash API key

async function fetchImageUrls(count = 10) {
    try {
        const response = await fetch(`${UNSPLASH_API_URL}?per_page=${count}`, {
            headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching images: ${response.statusText}`);
        }

        const data = await response.json();
        return data.map(image => image.urls.small); // Return small-sized image URLs
    } catch (error) {
        console.error(error);
        return [];
    }
}

module.exports = fetchImageUrls;
