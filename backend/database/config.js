const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDb = () => {
    mongoose.connect(process.env.URL, () => {
        console.log('Connected to MongoDB');
    });
}

module.exports = connectDb;