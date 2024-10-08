import axios from 'axios';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_IMAGE_ACCESS_KEY;
const API_URL = 'https://api.unsplash.com';

let cachedImage = null;

export async function getImages(query, width, height) {
  if (cachedImage) {
    return cachedImage;
  }

  if (!UNSPLASH_ACCESS_KEY) {
    console.error('Unsplash API key is not set or import.meta.env is not available');
    return null;
  }

  try {
    const response = await axios.get(`${API_URL}/photos/random`, {
      params: {
        query,
        w: width,
        h: height,
        fit: 'crop',
        client_id: UNSPLASH_ACCESS_KEY,
      },
    });

    cachedImage = response.data.urls.regular;
    return cachedImage;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error fetching Unsplash image:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}