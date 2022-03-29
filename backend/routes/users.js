const express = require('express');
const router = express.Router();
const { hash, compare, genSalt } = require('bcrypt');
const User = require('../database/models/user');

//get a user
router.get('/:id', async(req,res) => {
    try{
        const user = await User.findOne({_id:req.params.id});
        if(user){
            res.send(user);
        }else{
            res.send('no user found');
        }
    }catch(error){
        console.log(error);
    }
});

//update user
router.put('/:id', async(req,res) => {
    const { username, email, password } = req.body;
    try{
        const user = await User.findOne({_id:req.params.id});
        if(user){
            if(username){
                user.username = username;
            }
            if(email){
                user.email = email;
            }
            if(password){
                const salt = await genSalt(10);
                const hashedPassword = await hash(password, salt);
                user.password = hashedPassword;
            }
            const response = await user.save();
            if(response){
                res.send('Updated successfully');
            }else{
                res.send('Update failed');
            }
        }
    }catch(error){
        res.send(error.message);
    }
});

//delete user
router.delete('/:id', async(req,res) => {
    try{
        const user = await User.findOne({_id:req.params.id});
        if(user){
            const response = user.remove();
            res.send(response);
        }else{
            res.send('user does not exist');
        }
    }catch(error){
        res.send(error);
    }
});

module.exports = router;