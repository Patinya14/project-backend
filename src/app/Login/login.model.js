var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var LoginSchema = new Schema({
    logId: String,
  

});

var Login = mongoose.model('login', LoginSchema);

module.exports = {
    Login
};