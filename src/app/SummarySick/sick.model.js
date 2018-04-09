var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var SummarySickSchema = new Schema({
   
    summaryDiseaseName: String,
    summarySymptom: String,
    // summaryTreatmentPlan: String,
    // summaryRemedy: String,


});

var SummarySick = mongoose.model('summarySick', SummarySickSchema);

module.exports = {
    SummarySick
};