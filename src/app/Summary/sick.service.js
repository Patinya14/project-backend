const Summary = require('./sick.model').Summary;
const mongoose = require('mongoose');
let service = {}

service.call = () => {
    return Summary.find().sort({_id: -1});
}
// service.find = (id) => {
//     return Summary.find({ personId: id })
// }
service.create = (summary) => {
    summary = new Summary({
        personId: mongoose.Types.ObjectId(summary.personId),
        summarySymptom: summary.summarySymptom,
        summaryProcedure: summary.summaryProcedure,
        summaryTreatment: summary.summaryTreatment,
        summaryHerbalcompress: summary.summaryHerbalcompress, //ประคบสมุนไพร
        summaryHerbalsteam: summary.summaryHerbalsteam, //อบสมุนไพร
        summaryDrug: summary.summaryDrug, //จ่ายยา
        summaryUnit: summary.summaryUnit, //อื่นๆ
        summaryDuration: summary.summaryDuration, //ช่วงเวลา
    })
    return summary.save();
}

service.update = (summary, id) => {
    return Summary.findByIdAndUpdate(id, summary, { new: true })
}

service.delete = (id) => {
    return Summary.findByIdAndRemove(id)
}

// export service module
module.exports = service