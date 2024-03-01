import request from 'supertest';
import express from 'express';
import Technique from '../../models/Technique.js'; // Assuming the path is correct

// Import your router from the techniquesRoutes.js file
import router from '../../routes/techniquesRoutes.js'; // Assuming the path is correct

const app = express();
app.use(express.json());
app.use('/api/techniques', router); // Mount the router

// Mock Technique model methods
jest.mock('../../models/Technique.js');

// Mock Technique data
const mockTechniques = [
  { _id: '1', name: 'Technique 1', description: 'Description 1' },
  { _id: '2', name: 'Technique 2', description: 'Description 2' },
];

// Mock Technique.findById method
Technique.findById.mockImplementation((id) => {
  const technique = mockTechniques.find((t) => t._id === id);
  return Promise.resolve(technique);
});

describe('Techniques Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/techniques', () => {
    it('should return all techniques', async () => {
      Technique.find.mockResolvedValue(mockTechniques);

      const response = await request(app).get('/api/techniques');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockTechniques);
    });

    it('should handle errors', async () => {
      Technique.find.mockRejectedValue(new Error('Database error'));

      const response = await request(app).get('/api/techniques');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to fetch techniques' });
    });
  });

  // Add more test cases for other routes as needed (POST, PUT, DELETE)
});
