const General = require('./general.model').General;
const mongoose = require('mongoose'); 
let service = {}  

service.call = () => {
    return General.find().sort({_id: -1});
}
// service.find = (id) => {
//     return General.find({ personId: id})
// }
service.create = (gen) => {
    gen = new General({
        personId : mongoose.Types.ObjectId(gen.personId),
        genDate: gen.genDate,
        genTime: gen.genTime,
        genSymptoms: gen.genSymptoms,
        genPresentHistory: gen.genPresentHistory,
        genPastHistory: gen.genPastHistory,
    })
    return gen.save(); 
}

service.update = (gen, id) => {
    return General.findByIdAndUpdate(id, gen, { new: true })
}

service.delete = (id) => {
    return General.findByIdAndRemove(id)
}

// export service module
module.exports = service