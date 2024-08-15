const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Import Routes
const userRoutes = require('./routes/user.route');

const port = process.env.PORT || 6100;

// mongoose.connect(process.env.MONGOBD_URI, {}).then(() => 'DB Connected').catch((err) => console.log('DB ERROR => ', err));
// const connectDB = () => {
//     mongoose
//         .connect(process.env.MONGO_URI, {})
//         .then(() => console.log('DB Connected !'))
//         .catch((err) => console.log('DB Error => ', err));
// }
mongoose
        .connect(process.env.MONGOBD_URI, {})
        .then(() => console.log('DB Connected !'))
        .catch((err) => console.log('DB Error => ', err));

// console.log(process.env.MONGOBD_URI);

// Middlewares
app.use('/api/v1/users', userRoutes);

app.listen(port, () => console.log(`Server is running on the port ${port}`));
