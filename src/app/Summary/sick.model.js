var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SummarySchema = new Schema({

    personId: { "type": mongoose.Schema.Types.ObjectId, "ref": "personal" },
    summarySymptom: String,
    summaryProcedure: String,
    summaryTreatment: String,
    summaryHerbalcompress: String, //ประคบสมุนไพร
    summaryHerbalsteam: String, //อบสมุนไพร
    summaryDrug: String, //จ่ายยา
    summaryUnit: String, //อื่นๆ
    summaryDuration: String,//ช่วงเวลาการรักษา

});

var Summary = mongoose.model('summary', SummarySchema);

module.exports = {
    Summary
};