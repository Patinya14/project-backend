var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TreatmentSchema = new Schema({
    personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    treatDiseaseName: String,
    treatDiseaseID: String, //รหัสโรค
    treatMent: String,
    treatProcedure:  String,
    treatPrice: String,
    treatBodyParth: String,

});

var Treatment = mongoose.model('treatment', TreatmentSchema);

module.exports = {
    Treatment
};