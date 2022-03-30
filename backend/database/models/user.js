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
            required: true
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
        },
    }, 
    { timeStamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;