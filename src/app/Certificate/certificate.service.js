const Certificate = require('./certificate.model').Certificate;
const mongoose = require('mongoose');
let service = {}  

service.call = () => {
    return Certificate.find().populate("personal").populate("treater").sort({cerDateout: -1});
}

service.create = (cer) => {
    cer= new Certificate({
        personal : mongoose.Types.ObjectId(cer.personal),
        treater: mongoose.Types.ObjectId(cer.treater),
        date: cer.date, //วันเดือนปีที่ออกใบรับรองแพทย์
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


