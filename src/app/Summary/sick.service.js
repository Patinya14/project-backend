const Summary = require('./summary.model').SummarySick;
const mongoose = require('mongoose'); 
let service = {}  

service.call = () => {
    return Summary.find()
}

service.create = (summary) => {
    summary= new Summary({
        
         summaryDiseaseName: summary.summaryDiseaseName,
         summarySymptom: summary.summarySymptom,
       
    })
    return  summary.save(); 
}

service.update = (summary, id) => {
    return Summary.findByIdAndUpdate(id, summary, { new: true })
}

service.delete = (id) => {
    return Summary.findByIdAndRemove(id)
}

// export service module
module.exports = service