const mongoose = require('mongoose');

// Define the Booking schema
const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    package: { type: String, required: true },
});

// Create and export the Booking model
module.exports = mongoose.model('Booking', bookingSchema);
