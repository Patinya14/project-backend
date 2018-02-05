
const express = require('express'); // create constant value for use express libary 
const bodyParser = require('body-parser'); // create constant value for use body-parser 
const cors = require('cors'); // create constant value for use cors
const app = express(); // create constant value for use app by express libary

// parse body params and attache them to req.body
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// export app module 
module.exports = app;