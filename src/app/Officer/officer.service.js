const Officer = require('./officer.model').Officer;
const mongoose = require('mongoose');
let service = {}

service.call = () => {
    return Officer.find().sort({ _id: -1 });
}
// service.find = (id) => {
//     return tretificate.find({  trePhysicianName: id})
// }
service.create = (ficer) => {
    ficer = new Officer({
        personId: mongoose.Types.ObjectId(ficer.personId),
        ficerNameTitle: ficer.ficerNameTitle, //คำนำหน้า
        ficerName: ficer.ficerName, //ชื่อแพทย์
        ficerSurName: ficer.ficerSurName, //นามสกุลแพทย์
        ficerLicensed_No: ficer.ficerLicensed_No, //ใบอนุญาตประกอบโรคศิลปะเลขที่
    })
    return ficer.save();
}

service.update = (ficer, id) => {
    return Officer.findByIdAndUpdate(id, ficer, { new: true })
}

service.delete = (id) => {
    return Officer.findByIdAndRemove(id)
}
// export service module
module.exports = service


