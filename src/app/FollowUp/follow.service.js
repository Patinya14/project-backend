const Follow = require('./follow.model').Follow;
const mongoose = require('mongoose');
let service = {}  

service.call = () => {
    return Follow.find()
}
service.find = (id) => {
    return Medicine.findOne({Personal_id: id})
}

service.create = (fol) => {
    fol = new Follow({
        personId : mongoose.Types.ObjectId(fol.person),
        folID: fol.folID,
        folName: fol.folName,
        folSurName: fol.folSurName,
        folDate: fol.folDate,
        folmytimeHour:fol.folmytimeHour ,
        // folmytimeMinute: fol.folmytimeMinute,
        folPhysicianName: fol.folPhysicianName,
        folPurpose: fol.folPurpose,
        folduration: fol.folduration,
        
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