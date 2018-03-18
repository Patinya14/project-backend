var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var ModernSchema = new Schema({
    moderndiagnosis: String
});

var Modern = mongoose.model('modern', ModernSchema);

module.exports = {
    Modern
};