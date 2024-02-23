import express from "express";
import Technique from "../models/Technique.js";

const router = express.Router();

// Define route handler for GET request to fetch all techniques
router.get('/', (req, res) => {
    Technique.find()
        .then(techniques => {
            res.status(200).json(techniques);
        })
        .catch(err => {
            console.error('Error fetching techniques:', err);
            res.status(500).json({ error: 'Failed to fetch techniques' });
        });
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

// Define route handler for GET request to fetch SINGLE technique by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log('Received GET request: ID', id);
    Technique.findById(id)
        .then(singleTechnique => {
            if (!singleTechnique) {
                return res.status(404).json({ error: 'Technique not found' });
            }
            res.status(200).json(singleTechnique);
        })
        .catch(err => {
            console.error('Error fetching single technique:', err);
            res.status(500).json({ error: 'Failed to fetch single techniques' });
        });
});

// Route handler for PUT request updating a technique by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    console.log('Received PUT request:', req.body);
    // Example: Save the updated technique to the database
    Technique.findByIdAndUpdate(id, { name, description }, { new: true})
        .then(updatedTechnique => {
            if(!updatedTechnique) {
                return res.status(404).json({ error: 'Technique not found'});
            }
            console.log('Technique updated successfully:', updatedTechnique); // Log the updates technique
            res.status(200).json(updatedTechnique);
        })
        .catch(err => {
            console.error('Error updating technique:', err); // Log any errors that occur during technique updates
            res.status(500).json({ error: 'Failed to update technique' });
        });
});

// Route handler for deleting a technique by ID
router.delete('/:id', (req, res) => {
    console.log('Received POST request:', req.params);
    const { id } = req.params;
    Technique.findByIdAndDelete(id)
        .then(deletedTechnique => {
            if(!deletedTechnique) {
                return res.status(404).json({ error: 'Technique not found'});
            }
            console.log('Technique deleted successfully:', deletedTechnique); // Log the deleted technique
            res.status(201).json(deletedTechnique);
        })
        .catch(err => {
            console.error('Error deleting technique:', err); // Log any errors that occur during technique creation
            res.status(500).json({ error: 'Failed to delete technique' });
        });
});

// Export router to use in other files
export default router;