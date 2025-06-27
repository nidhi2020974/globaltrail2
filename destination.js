// backend/routes/destination.js
const express = require('express');
const Destination = require('../models/Destination');
const router = express.Router();

// Add a new destination
router.post('/', async (req, res) => {
  const { name, description, imageUrl, location } = req.body;

  try {
    const newDestination = new Destination({ name, description, imageUrl, location });
    await newDestination.save();
    res.status(201).json(newDestination);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get all destinations
router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get a specific destination by name
router.get('/:name', async (req, res) => {
  const { name } = req.params;

  try {
    const destination = await Destination.findOne({ name });
    if (!destination) {
      return res.status(404).json({ msg: 'Destination not found' });
    }
    res.status(200).json(destination);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
