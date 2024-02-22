import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// Parse JSON request bodies
app.use(express.json());

// Define error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Import route files
import techniquesRoutes from './routes/techniquesRoutes.js';

// Other route files

// Use route files
app.use('/api/techniques', techniquesRoutes);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});