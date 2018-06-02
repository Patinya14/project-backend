var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var PersonalDateSchema = new Schema({
    date: Date,
});

var PersonalDate = mongoose.model('personal-date', PersonalDateSchema);

module.exports = {
    PersonalDate
};