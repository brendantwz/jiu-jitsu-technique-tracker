import axios from 'axios';

const createTechnique = async (techniqueData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/techniques', techniqueData);
    return response.data; // Return the created technique from the response
  } catch (error) {
    throw new Error(`Failed to create technique: ${error.message}`);
  }
};

export default createTechnique;
