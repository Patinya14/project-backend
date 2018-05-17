var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TreatmentSchema = new Schema({
    personId: { "type": mongoose.Schema.Types.ObjectId, "ref": "personal" },

    treatID: String, //รหัสวิธีการรักษา
    treatMents: String, //วิธีการรักษา
    treatInTime: String, //ในเวลา
    treatOutTime: String, //นอกเวลา


});

var Treatment = mongoose.model('treatment', TreatmentSchema);

module.exports = {
    Treatment
};