const Treatment = require('./treat.model').Treatment;
const mongoose = require('mongoose');
let service = {}  

service.call = () => {
    return Treatment.find()
}
service.find = (id) => {
    return Treatment.findOne({personal_id: id})
}
service.create = (treat) => {
    treat = new Treatment({
        treatDiseaseName: treat. treatDiseaseName,
        treatDiseaseID:  treat.treatDiseaseID,
        treatMent:  treat.treatMent, //วิธีการรักษา
        treatProcedure:  treat.treatProcedure,  //หัตถการ
        treatPrice: treat.treatPrice,
        treatBodyParth: treat.treatBodyParth,

    })
    return treat.save(); 
}

service.update = (treat, id) => {
    return Treatment.findByIdAndUpdate(id,treat, { new: true })
}

service.delete = (id) => {
    return Treatment.findByIdAndRemove(id)
}
// export service module
module.exports = service


