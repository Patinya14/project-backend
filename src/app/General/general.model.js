var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GeneralSchema = new Schema({
    personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    date: Date,
    time: String,
    genSymptoms: String,
    genPresentHistory: String,
    genPastHistory: String,
    genCongenitalDisease: String,
});

var General = mongoose.model('general', GeneralSchema);

module.exports = {
    General
};