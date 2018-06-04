const Certificate = require('./certificate.model').Certificate;
const mongoose = require('mongoose');
let service = {}  

service.call = () => {
    return Certificate.find().sort({_id: -1});
}
// service.find = (id) => {
//     return Certificate.find({  cerPhysicianName: id})
// }
service.create = (cer) => {
    cer= new Certificate({
        personId : mongoose.Types.ObjectId(cer.personId),
        cerDateout: cer.cerDateout, //วันเดือนปีที่ออกใบรับรองแพทย์
        cerDateMeet: cer.cerDateMeet, //วันเดือนปีที่รับการรักษา
        cerSymptom: cer.cerSymptom, //อาการของโรค
    })
    return cer.save(); 
}

service.update = (cer, id) => {
    return Certificate.findByIdAndUpdate(id,cer, { new: true })
}

service.delete = (id) => {
    return Certificate.findByIdAndRemove(id)
}
// export service module
module.exports = service


