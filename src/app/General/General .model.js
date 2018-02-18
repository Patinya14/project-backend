var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var GeneralSchema = new Schema({
   genId : String,
   genDate: Date,
   genTime: String,
   genSymptoms: String,
   genPresentHistory: String,
   genPastHistory: String,
   

});

var General  = mongoose.model('general ', GeneralSchema);

module.exports = {
    General 
};