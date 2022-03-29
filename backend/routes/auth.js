const express = require('express');
const router = express.Router();
const { hash, compare, genSalt } = require('bcrypt');
const User = require('../database/models/user');

//register user
router.post('/register', async(req,res) => {
    const { username, email, password, birthday, gender } = req.body;
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    const user = new User({
        username,
        email,
        password:hashedPassword,
        birthday,
        gender,
    });
    const response = await user.save();
    if(response){
        console.log(response);
        res.send(response);
    }
});

//login user
router.post('/login', async(req,res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({email:email});
        if(user){
            const passwordValid = await compare(password, user.password);
            if(passwordValid){
                res.send('Success!');
            }else{
                console.log('incorrect email or password');
            }
        }else{
            console.log("User Not Registered");
        }
    }catch(error){
        res.send(error.message);
    }
});
module.exports = router;