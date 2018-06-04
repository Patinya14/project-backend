var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SummarySchema = new Schema({
    
   
});

var  Summary = mongoose.model('summary',  SummarySchema);

module.exports = {
    Summary
};