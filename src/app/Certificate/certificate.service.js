const Certificate = require('./certificate.model').Certificate;
let service = {}  

service.call = () => {
    return Certificate.find()
}

service.create = (cer) => {
    cer = new Certificate({
        cerDateout: cer.cerDateout,
        cerId: cer.cerId,
        cerName:cer,cerName,
        cerSurName: cer.cerSurName,
        cerPhysicianName: cer.cerPhysicianName,
        cerDateMeet: cer. cerDateMeet,
        cerSymptom: cer.cerSymptom
    })
    return cer.save(); 
}

service.update = (cer, id) => {
    return Certificate.findByIdAndUpdate(id, cer, { new: true })
}

service.delete = (id) => {
    return Certificate.findByIdAndRemove(id)
}

// export service module
module.exports = service