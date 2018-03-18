import { Double } from './C:/Users/User/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson';

var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var PhysicalSchema = new Schema({
 phyId: String,
 phyTemp: String,
 phyPulse: String,
 phyRespirationRate: String,
 phyBp: String,
 phyHeight: Float32Array,
 phyWeight:Float32Array,
 


});

var Physical = mongoose.model('physical', PhysicalSchema);

module.exports = {
    Physical
};