var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MedicineSchema = new Schema({
    personId: { "type": mongoose.Schema.Types.ObjectId, "ref": "personal" },
    date: String,
    time: String,
    drugId: String,
    drugName: String,
    drugPackages: String, //บรรจุภัณฑ์
    drugPrice: String,
    drugUnit: String,

});

var Medicine = mongoose.model('medicine', MedicineSchema);

module.exports = {
    Medicine
};