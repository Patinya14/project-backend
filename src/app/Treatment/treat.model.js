var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var TreatmentSchema = new Schema({
   treatDiseaseName: String,
   treatID: String,
   treatMent: String,
   treatDrug: String,
   treatDose: String,
   treatUseDose: String,
   treatPrice: String,

});

var Treatment = mongoose.model('treatment', TreatmentSchema);

module.exports = {
    Treatment
};