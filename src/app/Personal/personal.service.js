const Personal = require('./personal.model').Personal;
let service = {}  

service.call = () => {
    return Personal.find()
}

service.create = (person) => {
    person = new Personal({
        personId: person.personId,
        personNameTitle: person.personNameTitle,
        personName: person.personName,
        personSurname: person.personSurname,
        personGender: person.personGender,
        personDate: person.personDate,
        personMaritalStatus: person.personMaritalStatus,
        personNationality: person.personNationality,
        personCitizenship: person.personCitizenship,
        personReligion: person.personReligion,
        personCareer: person.personCareer,
        personIdentityId: person.personIdentityId,
        personBirthPlace: person.personBirthPlace,
        personProvince: person.personProvince,
        personAddress: person.personAddress,
        personNumber: person.personNumber
    })
    return person.save(); 
}

service.update = (person, id) => {
    return Personal.findByIdAndUpdate(id, person, { new: true })
}

service.delete = (id) => {
    return Personal.findByIdAndRemove(id)
}



// export service module
module.exports = service