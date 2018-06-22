var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfficerSchema = new Schema({
    personId: { "type": mongoose.Schema.Types.ObjectId, "ref": "personal" },
    ficerNameTitle: String, //คำนำหน้า
    ficerName: String, //ชื่อแพทย์
    ficerSurName: String, //นามสกุลแพทย์
    ficerLicensed_No: String, //ใบอนุญาตประกอบโรคศิลปะเลขที่
});

var Officer = mongoose.model('officer', OfficerSchema);

module.exports = {
    Officer
};