var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MedicineSchema = new Schema({
    personId: { "type": mongoose.Schema.Types.ObjectId, "ref": "personal" },
    drugId: String,
    drugName: String,
    drugAmount: String,
    drugUseDose: String,
    drugPrice: String,
    drugProperties: String,

});

var Medicine = mongoose.model('medicine', MedicineSchema);

module.exports = {
    Medicine
};