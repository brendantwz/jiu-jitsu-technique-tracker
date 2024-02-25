import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Validation middleware for registering a new user
const validateRegistration = [
    body('username').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
];

// Validation middleware for login
const validateLogin = [
    body('username').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        }
        next();
    }
]

// Register Route Handler
router.post('/register', validateRegistration, async (req, res) => {
    try {
        // Extract username and password from request body
        const { username, password } = req.body;
        console.log("Checking /register:", req.body);
    
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
          return res.status(400).json({ error: 'User already exists' });
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
    
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user' });
      }
});

// Login Route Handler
router.post('/login', validateLogin, async (req, res) => {
    const { username, password } = req.body;

    try {
        console.log('Attempting login for username:', username);
        // Find the user by username
        const user = await User.findOne({ username });
        console.log('Retrieved user:', user);

        // Verify password
        if (!user || !(await bcrypt.compare(password, user.password))) {
            console.log('Password:', password, 'User Password:', user.password);
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'secret');
        console.log('Login successful. Token:', token);

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Failed to login' });
    }
});

export default router;