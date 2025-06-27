// backend/routes/review.js
const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

// Add a new review
router.post('/', async (req, res) => {
  const { userId, destination, rating, comment } = req.body;
  try {
    const newReview = new Review({ userId, destination, rating, comment });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get reviews by destination
router.get('/:destination', async (req, res) => {
  const { destination } = req.params;
  try {
    const reviews = await Review.find({ destination }).populate('userId', 'name email');
    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
