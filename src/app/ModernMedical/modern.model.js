var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var ModernSchema = new Schema({
    Date: String,
    moderndiagnosis: String
});

var Modern = mongoose.model('modern', ModernSchema);

module.exports = {
    Modern
};