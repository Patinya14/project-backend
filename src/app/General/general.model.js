var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GeneralSchema = new Schema({
    personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    date: String,
    genTime: String,
    genSymptoms: String,
    genPresentHistory: String,
    genPastHistory: String,


});

var General = mongoose.model('general ', GeneralSchema);

module.exports = {
    General
};