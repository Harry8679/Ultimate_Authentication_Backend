const asyncHandler = require('express-async-handler');

const home = asyncHandler(async(req, res) => {
    res.send('Server is running');
});

const register = asyncHandler(async (req, res) => {
    res.send('Hello from NodeJS');
});

module.exports = { home, register };