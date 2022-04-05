const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDb = require('./database/config');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const postRouter = require('./routes/post');
const imagesRouter = require('./routes/images');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();
connectDb();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use('/api/images', imagesRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/post', postRouter);

app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`);
});