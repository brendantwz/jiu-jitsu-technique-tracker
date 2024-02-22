import express from "express";
import Technique from "../models/Technique.js";

const router = express.Router();

// Define route handler for GET request to fetch techniques
router.get('/', (req, res) => {
    //Logic to fetch techniques from the database
    res.json({ message: 'GET request to /techniques'});
});

// Define route handler for POST request to create a new technique
router.post('/', (req, res) => {
    console.log('Received POST request:', req.body);
    // Logic to create a new technique based on the data provided in req.body
    const { name, description } = req.body;
    // Example: Save the new technique to the database
    Technique.create({ name, description })
        .then(technique => {
            console.log('Technique created successfully:', technique); // Log the created technique
            res.status(201).json(technique);
        })
        .catch(err => {
            console.error('Error creating technique:', err); // Log any errors that occur during technique creation
            res.status(500).json({ error: 'Failed to create technique' });
        });
});

// Export router to use in other files
export default router;