const Personal = require('./personal.model').Personal;
const mongoose = require('mongoose'); 
let service = {}  

service.call = () => {
    return Personal.find().sort({ personId: -1 })
}

service.find = (id) => {
    return Personal.findOne({_id: id})
}

service.generate = () => {
    return new Promise(resolve => {
        service.call().then(listPersonals => {
            let newId = String(new Date().getFullYear() + 543).substring(2, 4);
            listPersonals.forEach(person => {
                if (newId === person.personId.substring(0, 2)){
                    resolve(person.personId);
                }
            })
            resolve(newId + '-0000');
        })
    })
}
 
service.create = (person) => {
    person = new Personal({
        personId :person.personId,
        personNameTitle: person.personNameTitle,
        personName: person.personName,
        personSurname: person.personSurname,
        personGender: person.personGender,
        personBirth: person.personBirth,
        personMaritalStatus: person.personMaritalStatus,
        personNationality: person.personNationality,
        personCitizenship: person.personCitizenship,
        personReligion: person.personReligion,
        personCareer: person.personCareer,
        personIdentityId: person.personIdentityId,
        personBirthPlace: person.personBirthPlace,
        personProvince: person.personProvince,
        personAddress: person.personAddress,
        personNumber: person.personNumber,
        personFamilyHistory: person.personFamilyHistory,
        personPersonalHistory: person.personPersonalHistory
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