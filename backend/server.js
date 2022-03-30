const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDb = require('./database/config');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();
connectDb();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`);
});