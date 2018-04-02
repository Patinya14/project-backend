var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GeneralSchema = new Schema({
    person: {"type": mongoose.Schema.Types.ObjectId, "ref":"person"},
    genDate: Date,
    genTime: String,
    genSymptoms: String,
    genPresentHistory: String,
    genPastHistory: String,


});

var General = mongoose.model('general ', GeneralSchema);

module.exports = {
    General
};