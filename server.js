const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 6100;

app.get('/api/v1/users/register', (req, res) => {
    res.send('Hello from NodeJS');
});

app.listen(() => console.log(`Server is running on the port ${port}`));