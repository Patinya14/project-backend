var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var AppointmentsSchema = new Schema({
// personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
//  date: String,
//  phyTemp: String,
//  phyPulse: String,
//  phyRespirationRate: String,
//  phyBp: String,
//  phyHeight: String,
//  phyWeight:String,
//  phyetc: String
 


});

var Appointments = mongoose.model('appointments', AppointmentsSchema);

module.exports = {
    Appointments
};