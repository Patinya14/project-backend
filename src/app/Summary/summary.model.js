var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SummarySchema = new Schema({
    personId: { "type": mongoose.Schema.Types.ObjectId, "ref": "personal" },
    disease: { "type": mongoose.Schema.Types.ObjectId, "ref": "Disease" }, //โรค
    date: String,
    time: String,
    treatment: [],//วิธีการรักษา
    countDrugs: [],//จ่ายยา
    statusTime: String,
    
});

var Summary = mongoose.model('summary', SummarySchema);

module.exports = {
    Summary
};