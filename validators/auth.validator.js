const { check } = require('express-validator');

const userSignupValidator = [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').not().isEmpty().withMessage('Email is required'),
    check('email').isEmail().withMessage('Email must be a valid email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
]

module.exports = { userSignupValidator };