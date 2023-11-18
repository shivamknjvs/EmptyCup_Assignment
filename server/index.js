const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://shivamknjvs9:Shivam1284@cluster0.cszyj.mongodb.net/EmptyCup", {
  useNewUrlParser: true, // Add options for useNewUrlParser and useUnifiedTopology
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  // Check if the user model exists in the database
  const userExists = mongoose.modelNames().includes('user');

  if (!userExists) {
    // Define Schema
    const Schema = mongoose.Schema;
    const yourSchema = new Schema({
      name: String,
      rating: Number,
      num_projects: Number,
      years_experience: Number,
      price: Number,
      contacts: String,
      shortlisted: Boolean,
      profile_picture: String
    });

    // Create Model
    mongoose.model('user', yourSchema);
  }

  // CRUD operations

  // Create
  app.post('/api/users', async (req, res) => {
    console.log('Received POST request with data:', req.body);

    try {
      const createdItem = await mongoose.model('user').create(req.body);
      res.json(createdItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Read (all users)
  app.get('/api/users', async (req, res) => {
    try {
      const items = await mongoose.model('user').find();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Test route
  app.post('/api/test', async (req, res) => {
    console.log('This is a test:', req.body);
    res.json({ message: 'Test successful' });
  });

  app.put('/api/users/:id/shortlist', async (req, res) => {
    try {
      const updatedUser = await mongoose.model('user').findByIdAndUpdate(
        req.params.id,
        { shortlisted: req.body.shortlisted },
        { new: true }
      );

      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.get('/api/users/shortlisted', async (req, res) => {
    try {
      const shortlistedItems = await mongoose.model('user').find({ shortlisted: true });
      res.json(shortlistedItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  // ... (other CRUD operations)

  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
