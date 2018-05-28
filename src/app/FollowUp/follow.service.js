const Follow = require('./follow.model').Follow;
const mongoose = require('mongoose');
let service = {}

service.call = () => {
    return Follow.find().sort({_id: -1});
}
// service.find = (id) => {
//     return Follow.findOne({ follow_id: id })
// }

service.create = (fol) => {
    fol = new Follow({
        personId: mongoose.Types.ObjectId(fol.person),
        folDate: fol.folDate, //วันที่นัดหมาย
        folmytimeHour: fol.folmytimeHour,
        folmytimeMinute: fol.folmytimeMinute,
        folPurpose: fol.folPurpose, //จุดประสงค์


    })
    return fol.save();
}

service.update = (fol, id) => {
    return Follow.findByIdAndUpdate(id, fol, { new: true })
}

service.delete = (id) => {
    return Follow.findByIdAndRemove(id)
}

// export service module
module.exports = service