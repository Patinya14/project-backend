const Treatment = require('./treatment.model').Treatment;
const mongoose = require('mongoose');
let service = {}

service.call = () => {
    return Treatment.find().sort({ datefield: -1 });
}
service.find = (id) => {
    return Treatment.findOne({ personal_id: id })
}
service.create = (treat) => {
    treat = new Treatment({
        treatID: treat.treatID, //รหัสวิธีการรักษา
        treatMents: treat.treatMents, //วิธีการรักษา
        treatInTime: treat.treatInTime, //ในเวลา
        treatOutTime: treat.treatOutTime, //นอกเวลา

    })
    return treat.save();
}

service.update = (treat, id) => {
    return Treatment.findByIdAndUpdate(id, treat, { new: true })
}

service.delete = (id) => {
    return Treatment.findByIdAndRemove(id)
}
// export service module
module.exports = service