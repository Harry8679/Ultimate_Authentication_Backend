const express = require('express');
const { home, register } = require('../controllers/user.controller');
const userRoutes = express.Router();

userRoutes.get('/', home);

userRoutes.get('/register', register);

module.exports = userRoutes;