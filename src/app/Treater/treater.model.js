var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TreaterSchema = new Schema({
    personId: { "type": mongoose.Schema.Types.ObjectId, "ref": "personal" },
    treNameTitle: String, //คำนำหน้า
    trePhysicianName: String, //ชื่อแพทย์
    trePhysicianSurName: String, //นามสกุลแพทย์
    treLicensed_No: String, //ใบอนุญาตประกอบโรคศิลปะเลขที่
});

var Treater = mongoose.model('treater', TreaterSchema);

module.exports = {
    Treater
};