const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const cors = require('cors');

// Import Routes
const userRoutes = require('./routes/user.route');
const connectDB = require('./config/database');

const port = process.env.PORT || 6100;

connectDB();
// console.log(process.env.NODE_ENV);
console.log(process.env.FRONTEND_URL);

// Middlewares app
app.use(morgan('dev'));
if (process.env.NODE_ENV === 'dev') {
    app.use(cors({ origin: `${process.env.FRONTEND_URL}` }));
}
app.use(express.json());

// Middlewares
app.use('/api/v1/users', userRoutes);

app.listen(port, () => console.log(`Server is running on the port ${port}`));
