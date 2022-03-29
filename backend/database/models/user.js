const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        birthday: {
            type: Date,
            required: true,
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Custom'],
        },
        followers: {
            type: Array,
        },
        following: {
            type: Array,
        },
        desc: {
            type: String,
        },
        city: {
            type: String,
        },
        from: {
            type: String,
        },
        relationship: {
            type: String,
            enum: ['Single', 'Taken', 'Complicated'],
        },
    }, 
    { timeStamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;