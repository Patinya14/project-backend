var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var PersonalSchema = new Schema({
    person: {"type": mongoose.Schema.Types.ObjectId, "ref":"person"},
    personId: String,
    personNameTitle: String,
    personName: String,
    personSurname: String,
    personGender: String,
    personBirth: Date,
    personMaritalStatus: String,
    personNationality: String,
    personCitizenship: String,
    personReligion: String,
    personCareer: String,
    personIdentityId: String,
    personBirthPlace: String,
    personProvince: String,
    personAddress: String,
    personNumber: String,
    personFamilyHistory: String,
    personPersonalHistory: String,
});

var Personal = mongoose.model('personal', PersonalSchema);

module.exports = {
    Personal
};