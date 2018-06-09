const Follow = require('./follow.model').Follow;
const mongoose = require('mongoose');
let service = {}

service.call = () => {
    return Follow.find().populate("personal").populate("treater").sort({date: -1});
}

service.create = (fol) => {
    fol = new Follow({
        personal : mongoose.Types.ObjectId(fol.personal),
        treater: mongoose.Types.ObjectId(fol.treater),
        date: fol.date, //วันที่นัดหมาย
        folmytimeHour: fol.folmytimeHour,
        folmytimeMinute: fol.folmytimeMinute,
        folPurpose: fol.folPurpose, //จุดประสงค์
        folDuration: fol.folDuration, //ช่วงเวลา

    })
    return fol.save();
}

service.update = (fol, id) => {
    return Follow.findByIdAndUpdate(id,fol, { new: true })
}

service.delete = (id) => {
    return Follow.findByIdAndRemove(id)
}

// export service module
module.exports = service