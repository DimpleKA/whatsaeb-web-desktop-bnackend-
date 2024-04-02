const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/allusers', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        res.json(users); // Send the users as a JSON response
    } catch (error) {
        console.error("Error fetching all users:", error);
        res.status(500).json({ error: "Internal server error" }); // Send a 500 status code and an error message
    }
});

router.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body); // Create a new user instance using the request body
        const savedUser = await newUser.save(); // Save the user to the database
        res.status(201).json(savedUser); // Send a 201 status code and the saved user as a JSON response
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Internal server error" }); // Send a 500 status code and an error message
    }
});

router.patch('/update', async (req, res) => {
    // Implement update user logic
});

router.delete('/delete', async (req, res) => {
    // Implement delete user logic
});

module.exports = router;
