var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EvalutionSchema = new Schema({
    personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    evaDate: String,
    evaAfter: String,
    evaBodyParth: String,
    evaLevel: String,
});

var Evalution= mongoose.model('evalution ', EvalutionSchema);

module.exports = {
    Evalution
};