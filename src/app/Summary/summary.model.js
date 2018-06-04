var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SummarySchema = new Schema({
    sumDisease: String, //โรค
    sumProcedure: String, //หัตถการ
    sumTreatment: String,//วิธีการรักษา
    sumIntime: String, //ในเวลา
    sumOuttime: String,//นอกเวลา
    sumDrug: String,//จ่ายยา
    sumUnit: String,//จำนวน

});

var Summary = mongoose.model('summary', SummarySchema);

module.exports = {
    Summary
};