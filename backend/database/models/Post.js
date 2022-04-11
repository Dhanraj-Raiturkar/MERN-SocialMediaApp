const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        likes: {
            type: Array,
        },
        caption: {
            type: String,
        },
        image: {
            type: String,
        },
        time : { 
            type : Date, 
            default: Date.now()
        }
    },
    { timeStamps: true }
);


const User = mongoose.model("Post", userSchema);

module.exports = User;