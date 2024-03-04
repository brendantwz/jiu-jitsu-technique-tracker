import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// Parse JSON request bodies
app.use(express.json());
// Enable CORS for all routes (Note to configure if deploying to production)
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/techniquesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Define error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Import route files
import techniquesRoutes from './routes/techniquesRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Use route files
app.use('/api/techniques', techniquesRoutes);
app.use('/api/auth', authRoutes);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});