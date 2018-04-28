var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CertificateSchema = new Schema({
    personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    cerDateout: String, //วันเดือนปีที่ออกใบรับรองแพทย์
    cerNameTitle: String, //คำนำหน้า
    cerPhysicianName: String, //ชื่อแพทย์
    cerPhysicianSurName: String, //นามสกุลแพทย์
    cerDateMeet: String, //วันเดือนปีที่รับการรักษา
    cerSymptom: String, //อาการของโรค
    cerLicensed_No: String, //ใบอนุญาตประกอบโรคศิลปะเลขที่

});

var Certificate = mongoose.model('certificate', CertificateSchema);

module.exports = {
    Certificate
};