// routes/greetings.js
const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../utils/dataUtils');

// GET all greetings
router.get('/', (req, res) => {
    try {
        const greetings = readData();
        res.json({
            success: true,
            count: greetings.length,
            data: greetings
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve greetings' });
    }
});

// GET greeting by ID
router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }
        const greetings = readData();
        const greeting = greetings.find(g => g.id === id);
        if (!greeting) {
            return res.status(404).json({ error: 'Greeting not found' });
        }
        res.json({
            success: true,
            data: greeting
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve greeting' });
    }
});