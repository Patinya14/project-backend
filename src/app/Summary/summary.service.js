const Summary = require('./summary.model').Summary;
const mongoose = require('mongoose');

let service = {}

service.call = () => {
    return Summary.find().populate("disease").populate("personId").populate("treater").populate("officer").sort({ _id: -1 });
}
service.find = (id) => {
    return Summary.find({ personId: id }).populate("disease").populate("personId").populate("treater").populate("officer").sort({ _id: -1 })
}

service.create = (sum) => {
    newsum = new Summary({
        personId: mongoose.Types.ObjectId(sum.personId),
        disease: mongoose.Types.ObjectId(sum.disease), //โรค
        treater: mongoose.Types.ObjectId(sum.treater), //ผู้รักษา
        officer: mongoose.Types.ObjectId(sum.officer), //ผู้ตรวจ
        date: sum.date,
        time: sum.time,
        treatment: sum.treatment, //หัตถการ
        countDrugs: sum.countDrugs,//วิธีการรักษา
        statusTime: sum.statusTime,
    })
    return newsum.save();
}

service.update = (sum, id) => {
    return Summary.findByIdAndUpdate(id, sum, { new: true })
}

service.delete = (id) => {
    return Summary.findByIdAndRemove(id)
}

// export service module
module.exports = service