var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CertificateSchema = new Schema({
    personal: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    treater: { "type": mongoose.Schema.Types.ObjectId, "ref": "treater" }, 
    cerDateout: String, //วันเดือนปีที่ออกใบรับรองแพทย์
    cerDateMeet: String, //วันเดือนปีที่รับการรักษา
    cerSymptom: String, //อาการของโรค
  
});

var Certificate = mongoose.model('certificate', CertificateSchema);

module.exports = {
    Certificate
};