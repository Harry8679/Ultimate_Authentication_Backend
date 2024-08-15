const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');

const home = asyncHandler(async (req, res) => {
    res.send('Server is running');
});

const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({
            error: 'Email is taken'
        });
    }

    // Créer un nouvel utilisateur
    let newUser = new User({ name, email, password });

    try {
        const savedUser = await newUser.save();
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email
            }
        });
    } catch (err) {
        console.log('SIGNUP ERROR', err);
        res.status(400).json({
            error: 'Error saving the user'
        });
    }
});

module.exports = { home, register };
