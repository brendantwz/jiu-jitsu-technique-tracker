import express from "express";

const router = express.Router();

// Define route handler for GET request to fetch techniques
router.get('/', (req, res) => {
    //Logic to fetch techniques from the database
    res.json({ message: 'GET request to /techniques'});
});

// Export router to use in other files
export default router;