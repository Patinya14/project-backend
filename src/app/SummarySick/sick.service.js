const SummarySick = require('./summarySick.model').SummarySick;
let service = {}  

service.call = () => {
    return SummarySick.find()
}

service.create = (summary) => {
    summary= new SummarySick({
         summaryDiseaseName: summarySick.summaryDiseaseName,
         summarySymptom: summarySick.summarySymptom
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