require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Connect to MongoDB (non-blocking)
connectDB().catch(err => {
  console.log('MongoDB connection failed. App will run without database.');
  console.log('Contact form submissions will not be saved.');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/contact', contactRoutes);

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'public')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
