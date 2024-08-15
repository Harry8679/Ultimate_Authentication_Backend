const asyncHandler = require('express-async-handler');

const home = asyncHandler(async(req, res) => {
    res.send('Server is running');
});

const register = asyncHandler(async (req, res) => {
    console.log(req.body);
    res.send('Registration');
});

module.exports = { home, register };