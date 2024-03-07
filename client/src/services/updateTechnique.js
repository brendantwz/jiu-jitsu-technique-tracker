import axios from 'axios';

const updateTechnique = async (techniqueId, techniqueData) => {
  try {
    const response = await axios.put(`http://localhost:3000/api/techniques/${techniqueId}`, techniqueData);
    return response.data; // Return the updated technique from the response
  } catch (error) {
    throw new Error(`Failed to update technique: ${error.message}`);
  }
};

export default updateTechnique;
