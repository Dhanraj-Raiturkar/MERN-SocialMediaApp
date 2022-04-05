const express = require('express');
const router = express.Router();
const { hash, compare, genSalt } = require('bcrypt');
const User = require('../database/models/user');
const authUser = require('../middleware/authUser');
const { verify } = require('jsonwebtoken');
const upload = require('../middleware/addFile');

//get all users
router.get('/all', authUser, async(req,res) => {
    try{
        verify(req.token, process.env.ACCESSTOKEN_SECRET);
        const users = await User.find();
        res.send(users);  
    }catch(error){
        res.status(403).send(error.message);
    };
});

router.get('/', authUser, async(req,res) => {
    try{
        const userId = verify(req.token, process.env.ACCESSTOKEN_SECRET);
        const users = await User.findOne({_id:userId.userId});
        res.send(users);  
    }catch(error){
        res.status(403).send(error.message);
    };
});

//get user by access token
router.post('/getUserData', async(req,res) => {
    try{
        const bearerToken = req.headers['authorization'];
        const accessToken = bearerToken.split(' ')[1];
        req.token = accessToken;
        const response = verify(req.token, process.env.ACCESSTOKEN_SECRET);
        const user = await User.findOne({_id:response.userId});
        res.json(user);
    }catch(error){
        res.status(400);
        console.log(error);
    }
});

//get a user by username
router.get('/username/:username', async(req,res) => {
    try{
        const user = await User.findOne({username:req.params.username});
        if(user){
            res.send(user);
        }else{
            res.send(null);
        }
    }catch(error){
        console.log(error);
    }
});

//get a user by email
router.get('/email/:email', async(req,res) => {
    try{
        const user = await User.findOne({email:req.params.email});
        if(user){
            res.send(user);
        }else{
            res.send(null);
        }
    }catch(error){
        console.log(error);
    }
});


//update user
router.put('/update', authUser, async(req,res) => {
    try{
        const userId = verify(req.token, process.env.ACCESSTOKEN_SECRET);
        const user = await User.findOne({_id:userId.userId});
        const {username, email, password, desc, city, from, relationship} = req.body;
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
            if(desc){
                user.desc = desc;
            }
            if(city){
                user.city = city;
            }
            if(from) {
                user.from = from;
            }
            if(relationship){
                user.relationship = relationship;
            }
            const response = await user.save();
            if(response){
                res.send(user);
            }else{
                res.send('Update failed');
            }
        }
    }catch(error){
        res.status(403).send(error.message);
    };
//     
//     try{
//         const user = await User.findOne({_id:req.params.id});
//         if(user){
//             if(username){
//                 user.username = username;
//             }
//             if(email){
//                 user.email = email;
//             }
//             if(password){
//                 const salt = await genSalt(10);
//                 const hashedPassword = await hash(password, salt);
//                 user.password = hashedPassword;
//             }
//             if(desc){
//                 user.desc = desc;
//             }
//             if(city){
//                 user.city = city;
//             }
//             if(from) {
//                 user.from = from;
//             }
//             if(relationship){
//                 user.relationship = relationship;
//             }
//             const response = await user.save();
//             if(response){
//                 res.send('Updated successfully');
//             }else{
//                 res.send('Update failed');
//             }
//         }
//     }catch(error){
//         res.send(error.message);
//     }
// });

// //delete user
// router.delete('/:id', async(req,res) => {
//     try{
//         const user = await User.findOne({_id:req.params.id});
//         if(user){
//             const response = user.remove();
//             res.send(response);
//         }else{
//             res.send('user does not exist');
//         }
//     }catch(error){
//         res.send(error);
//     }
});


//update coverpic
router.post('/coverpic/:id', upload.single('coverPicUpload'), async(req,res) => {
    const user = await User.findOne({_id:req.params.id});
    user.coverPic = req.filename;
    const response = await user.save();
    res.end();
});

//update profilepic
router.post('/profilepic/:id', upload.single('profilePicUpload'), async(req,res) => {
    const user = await User.findOne({_id:req.params.id});
    user.profilePic = req.filename;
    const response = await user.save();
    res.end();
});

module.exports = router;