const express = require('express');
const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
    res.send('Server is running');
});

userRoutes.get('/register', (req, res) => {
    res.send('Hello from NodeJS');
});

module.exports = userRoutes;