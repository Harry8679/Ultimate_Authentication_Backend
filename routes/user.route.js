const express = require('express');
const { home, register } = require('../controllers/user.controller');
const { userSignupValidator } = require('../validators/auth.validator');
const { runValidation } = require('../validators/index.validator');
const userRoutes = express.Router();

userRoutes.get('/', home);

userRoutes.post('/register', userSignupValidator, runValidation, register);

module.exports = userRoutes;