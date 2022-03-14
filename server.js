const express = require('express')
const app = express()

const mongoose = require('mongoose');
const cors = require('cors');
const port = 8000;

const userRouter = require('./modules/users/userRouter');
const authRouter = require('./modules/authes/authRouter');


require('dotenv').config();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', authRouter);
app.use('/users', userRouter);


mongoose.connect('mongodb://localhost:27017/netflixApp', (err) => {
    if (err) process.exit(1);
    console.log("connected to database successfully");
});

app.listen(port, () => {
    console.log(`Netflix backend server is running`)
})

app.use((err, req, res, next) => {
    res.send({
        status: err.statusCode,
        message: err.message,
        errors: err.errors || []
    });
})
