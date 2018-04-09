var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EvalutionSchema = new Schema({
    personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    date: String,
    evaAfter: String,
    

});

var Evalution= mongoose.model('evalution ', EvalutionSchema);

module.exports = {
    Evalution
};