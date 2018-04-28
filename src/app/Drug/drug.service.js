const Medicine= require('./drug.model').Medicine;
const mongoose = require('mongoose'); 
let service = {}  

service.call = () => {
    return Medicine.find()
}

service.find = (id) => {
    return Medicine.findOne({Personal_id: id})
}

service.create = (drug) => {
    drug = new Medicine({
        personId : mongoose.Types.ObjectId(drug.person),
        drugId: drug.drugId,
        drugName: drug.drugName,
        drugAmount: drug.drugAmount,
        drugUseDose: drug.drugUseDose,
        drugPrice: drug.drugPrice,
        drugProperties: drug.drugProperties,
    })
    return drug.save(); 
}

service.update = (drug, id) => {
    return Medicine.findByIdAndUpdate(id, drug, { new: true })
}

service.delete = (id) => {
    return Medicine.findByIdAndRemove(id)
}



// export service module
module.exports = service