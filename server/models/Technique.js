import mongoose from 'mongoose';

// Define a Mongoose schema for the Technique model
const techniqueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Create a Mongoose model for the Technique schema
const Technique = mongoose.model('Technique', techniqueSchema);

// Export the Technique model
export default Technique;