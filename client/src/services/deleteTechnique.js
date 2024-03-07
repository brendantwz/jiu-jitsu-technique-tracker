import axios from 'axios';

const deleteTechnique = async (techniqueId) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/techniques/${techniqueId}`);
    return response.data; // Return any response data if needed
  } catch (error) {
    throw new Error(`Failed to delete technique: ${error.message}`);
  }
};

export default deleteTechnique;
