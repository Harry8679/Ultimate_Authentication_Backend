const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Import Routes
const userRoutes = require('./routes/user.route');
const connectDB = require('./config/database');

const port = process.env.PORT || 6100;

connectDB();

// Middlewares
app.use('/api/v1/users', userRoutes);

app.listen(port, () => console.log(`Server is running on the port ${port}`));
