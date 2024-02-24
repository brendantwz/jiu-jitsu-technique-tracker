import mongoose from 'mongoose';

// Define a Mongoose schema for the Technique model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create a Mongoose model for the User schema
const User = mongoose.model('User', userSchema);

// Export the Technique model
export default User;