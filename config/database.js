const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI, {})
        .then(() => console.log('DB Connected !'))
        .catch((err) => console.log('DB Error => ', err));
}

module.exports = connectDB;