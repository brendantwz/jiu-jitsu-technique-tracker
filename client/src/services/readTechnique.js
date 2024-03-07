import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/techniques'; // Adjust the URL based on your backend API.

// Fetch all techniques from the backend
export const fetchTechniques = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // The list of techniques
  } catch (error) {
    console.error('Failed to fetch techniques:', error);
    throw error; // Rethrow to handle it in the component
  }
};
