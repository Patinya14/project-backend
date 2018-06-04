const Treater = require('./treater.model').Treater;
const mongoose = require('mongoose');
let service = {}

service.call = () => {
    return Treater.find().sort({ _id: -1 });
}
// service.find = (id) => {
//     return tretificate.find({  trePhysicianName: id})
// }
service.create = (tre) => {
    tre = new Treater({
        personId: mongoose.Types.ObjectId(tre.personId),
        treNameTitle: tre.treNameTitle, //คำนำหน้า
        trePhysicianName: tre.trePhysicianName, //ชื่อแพทย์
        trePhysicianSurName: tre.trePhysicianSurName, //นามสกุลแพทย์
        treLicensed_No: tre.treLicensed_No, //ใบอนุญาตประกอบโรคศิลปะเลขที่
    })
    return tre.save();
}

service.update = (tre, id) => {
    return Treater.findByIdAndUpdate(id, tre, { new: true })
}

service.delete = (id) => {
    return Treater.findByIdAndRemove(id)
}
// export service module
module.exports = service


