import React, { useState, useEffect } from 'react';
import { fetchTechniques } from '../services/TechniqueService';

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

  return (
    <div>
      <h2>Techniques</h2>
      <ul>
        {techniques.map((technique) => (
          <li key={technique._id}>{technique.name}</li> // Adjust according to your data structure
        ))}
      </ul>
    </div>
  );
};

export default TechniquesList;
