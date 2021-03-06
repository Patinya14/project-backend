var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CertificateSchema = new Schema({
    personal: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    treater: { "type": mongoose.Schema.Types.ObjectId, "ref": "treater" }, 
    date: Date,
    cerDateMeet: String, //วันเดือนปีที่รับการรักษา
    cerSymptom: String, //อาการของโรค
  
});

var Certificate = mongoose.model('certificate', CertificateSchema);

module.exports = {
    Certificate
};