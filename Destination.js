// backend/models/Destination.js
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Destination', destinationSchema);
