const General = require('./general.model').General;
const mongoose = require('mongoose');
let service = {}

service.call = () => {
    return General.find().sort({ _id: -1 });
}
service.find = (id) => {
    return General.find({ personId: id }).sort({ _id: -1 })
}

service.create = (gen) => {
    newgen = new General({
        personId: mongoose.Types.ObjectId(gen.personId),
        date: gen.date,
        time: gen.time,
        genSymptoms: gen.genSymptoms,
        genPresentHistory: gen.genPresentHistory,
        genPastHistory: gen.genPastHistory,
        genCongenitalDisease: gen.genCongenitalDisease,//โรคประจำตัว
    })
    return newgen.save();
}

service.update = (gen, id) => {
    return General.findByIdAndUpdate(id, gen, { new: true })
}

service.delete = (id) => {
    return General.findByIdAndRemove(id)
}

// export service module
module.exports = service