const express = require('express');
const { verify } = require('jsonwebtoken');
const router = express.Router();
const Post = require('../database/models/post');
const User = require('../database/models/user');
const upload = require('../middleware/addFile');
const authUser = require('../middleware/authUser');

router.get('/', (req,res) => {
    res.send('ok');
})

router.get('/all', async(req,res) => {
    try{
        const posts = await Post.find();
        res.send(posts);
    }catch(error){
        console.log(error);
    }
})

router.get('/timeline/:id', async(req,res) => {
    try{
        const posts = await Post.find({userId:req.params.id});
        res.send(posts);
    }catch(error){
        console.log(error);
    }
})

router.get('/follower/:id', async(req,res) => {
    try{
        let users = []
        let posts = []
        const user = await User.find({_id:req.params.id})
        user[0].following.map(user => {
            users.push(user);
        });
        console.log(users);
        users.map(async(user) => {
            const post = await Post.findOne({userId:user._id});
        });
        console.log(posts);
        res.send(posts);
    }catch(error){
        console.log(error);
    }
})

router.post('/add/:id', upload.single('postPicture'), async(req,res) => {
    console.log(req.body.caption);
    try{
        const user = await User.findOne({_id:req.params.id});
        const post = new Post(
            {
                userId: user._id,
                caption: req.body.caption,
                image: req.filename
            }
        );
        await post.save();
    }catch(error){
        console.log(error);
    }
});

module.exports = router;