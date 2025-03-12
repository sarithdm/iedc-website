const express = require('express');
const User = require('../models/Users'); // Ensure the correct path to the User model
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user && (await user.matchPassword(password))) {
            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

            console.log("Generated Token:", token); // Debugging line

            res.json({ token, role: user.role });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;