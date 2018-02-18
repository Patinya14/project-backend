const mongoose = require('mongoose');  // create constant value for use mongoose.
mongoose.Promise = require('bluebird');

//declare hostname of database 
var url = 'mongodb://localhost:27017/database';

//connect database 
mongoose.connect(url);

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

exports.connect = () => {
  return mongoose.connection;
};