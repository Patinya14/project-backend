var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EvalutionSchema = new Schema({
    personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    date: String,
    time: String,
    evaAfter: String,
    evaBodyParth: String,
    evaLevel: String,
});

var Evalution= mongoose.model('evalution ', EvalutionSchema);

module.exports = {
    Evalution
};