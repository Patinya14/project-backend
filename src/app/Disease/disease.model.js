var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DiseaseSchema = new Schema({
    // personId: { "type": mongoose.Schema.Types.ObjectId, "ref": "personal" },
    date: String,
    time: String,
    disName: String,
    disID: String, //รหัสโรค
    disProcedure: String,
    disBodyParth: String,


});

var Disease = mongoose.model('Disease', DiseaseSchema);

module.exports = {
    Disease
};