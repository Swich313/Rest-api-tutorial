const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const PORT = process.env.PORT || 3000;
const postRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postRoute);

app.use('/post', () => {
    console.log('MESSAGE FROM MIDDLEWARE')
});

app.get('/', (req, res) => {
    res.send('We are on home');
});


mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to db');
});


app.listen(PORT, () => {console.log(`The server is running on the port: ${PORT}`)});