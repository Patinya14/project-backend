var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var CertificateSchema = new Schema({
   cerDateout: String,
   cerId: String,
   cerName: String,
   cerSurName: String,
   cerPhysicianName: String,
   cerDateMeet: String,
   cerSymptom: String
});

var  Certificate = mongoose.model(' certificate',  CertificateSchema);

module.exports = {
    Certificate
};