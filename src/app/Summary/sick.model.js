var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var SummarySchema = new Schema({

    // summaryDiseaseName: String,
    // summarySymptom: String,
    summarySymptom: String,
    summaryProcedure: String,
    summaryTreatment: String,
    summaryRemedy: String ,

});

var Summary = mongoose.model('summary', SummarySchema);

module.exports = {
    Summary
};