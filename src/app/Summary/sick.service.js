const Summary = require('./summary.model').SummarySick;
const mongoose = require('mongoose');
let service = {}

service.call = () => {
    return Summary.find()
}
service.find = (id) => {
    return Follow.findOne({summary_id: id })
}
service.create = (summary) => {
    summary = new Summary({
        personId: mongoose.Types.ObjectId(summary.person),
        summarySymptom: summary.summarySymptom,
        summaryProcedure: summary.summaryProcedure,
        summaryTreatment: summary.summaryTreatment,
        summaryHerbalcompress: summary.summaryHerbalcompress, //ประคบสมุนไพร
        summaryHerbalsteam: summary.summaryHerbalsteam, //อบสมุนไพร
        summaryDrug: summary.summaryDrug, //จ่ายยา
        summaryAnother: summary.summaryAnother, //อื่นๆ

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