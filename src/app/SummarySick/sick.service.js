const SummarySick = require('./summarySick.model').SummarySick;
const mongoose = require('mongoose'); 
let service = {}  

service.call = () => {
    return SummarySick.find()
}

service.create = (summary) => {
    summary= new SummarySick({
        // person : mongoose.Types.ObjectId(summary.person),
         summaryDiseaseName: summarySick.summaryDiseaseName,
         summarySymptom: summarySick.summarySymptom,
        //  summaryTreatmentPlan: summarySick.summaryTreatmentPlan,
        //  summaryRemedy: summarySick.summaryRemedy,
    })
    return  summary.save(); 
}

service.update = (summary, id) => {
    return SummarySick.findByIdAndUpdate(id, summary, { new: true })
}

service.delete = (id) => {
    return SummarySick.findByIdAndRemove(id)
}

// export service module
module.exports = service