import React, { useState, useEffect } from 'react';
import { fetchTechniques } from '../services/readTechnique';
import createTechnique from '../services/createTechnique';
import updateTechnique from '../services/updateTechnique';
import deleteTechnique from '../services/deleteTechnique';

const TechniquesList = () => {
  const [techniques, setTechniques] = useState([]);

  useEffect(() => {
    const getTechniques = async () => {
      try {
        const data = await fetchTechniques();
        setTechniques(data);
      } catch (error) {
        console.error('Error loading techniques:', error);
      }
    };

    getTechniques();
  }, []);


  const handleCreateTechnique = async () => {
    try {
      const newTechnique = await createTechnique({ name: 'New Technique', description: 'Description of the new technique' });
      console.log('New technique created:', newTechnique);
      // Refresh the techniques list or perform any other necessary actions
    } catch (error) {
      console.error('Error creating technique:', error);
    }
  };

  const handleUpdateTechnique = async (techniqueId, updatedData) => {
    try {
      const updatedTechnique = await updateTechnique(techniqueId, updatedData);
      console.log('Technique updated:', updatedTechnique);
      // Refresh the techniques list or perform any other necessary actions
    } catch (error) {
      console.error('Error updating technique:', error);
    }
  };

  const handleDeleteTechnique = async (techniqueId) => {
    try {
      const deletedTechnique = await deleteTechnique(techniqueId);
      console.log('Technique deleted:', deletedTechnique);
      // Refresh the techniques list or perform any other necessary actions
    } catch (error) {
      console.error('Error deleting technique:', error);
    }
  };

  return (
    //TODO #1 - Technique feature on a complete different page after user login
    //TODO #2 - Improve UI. Allow User to edit descriptions and delete specific technique (must be able to see changes immediately)
    //TODO #3 - Login UI feature
    //TODO #4 - 
    <div>
      <h2>Techniques</h2>
      <button onClick={handleCreateTechnique}>Create Technique</button>
      <ul>
        {techniques.map((technique) => (
          <li key={technique._id}>
            {technique.name} - {technique.description}
            <button onClick={() => handleUpdateTechnique(technique._id, { name: 'Updated Name', description: 'Updated Description' })}>Update</button>
            <button onClick={() => handleDeleteTechnique(technique._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechniquesList;
