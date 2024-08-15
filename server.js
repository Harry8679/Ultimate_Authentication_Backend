const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Import Routes
const userRoutes = require('./routes/user.route');

const port = process.env.PORT || 6100;

// Middlewares
app.use('/api/v1/users', userRoutes);

app.listen(port, () => console.log(`Server is running on the port ${port}`));
