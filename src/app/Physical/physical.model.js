var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhysicalSchema = new Schema({
    personId: { "type": mongoose.Schema.Types.ObjectId, "ref": "personal" },
    date: String,
    time: String,
    phyTemp: String,
    phyPulse: String,
    phyRespirationRate: String,
    phyBp: String,
    phyHeight: String,
    phyWeight: String,
    phyBodyParth: String,
    phyLevel: String,


});

var Physical = mongoose.model('physical', PhysicalSchema);

module.exports = {
    Physical
};