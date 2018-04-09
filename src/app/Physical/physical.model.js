var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var PhysicalSchema = new Schema({
// personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
 date: String,
 phyTemp: String,
 phyPulse: String,
 phyRespirationRate: String,
 phyBp: String,
 phyHeight: String,
 phyWeight:String,
 phyetc: String
 


});

var Physical = mongoose.model('physical', PhysicalSchema);

module.exports = {
    Physical
};