const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST route for booking a vacation
router.post('/bookings', async (req, res) => {
    try {
        const { name, email, startDate, endDate, package } = req.body;

        const newBooking = new Booking({
            name,
            email,
            startDate,
            endDate,
            package,
        });

        await newBooking.save();
        res.status(201).json({ message: 'Booking confirmed!' });
    } catch (error) {
        console.error('Error booking the vacation:', error);
        res.status(500).json({ message: 'An error occurred, please try again.' });
    }
});

module.exports = router;
