const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;


app.listen(PORT, () => {console.log(`The server is running on the port: ${PORT}`)});