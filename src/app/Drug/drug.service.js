const Medicine = require('./drug.model').Medicine;
const mongoose = require('mongoose');
let service = {}

service.call = () => {

    return Medicine.find().sort({datefield: -1});

}

service.find = (id) => {
    return Medicine.findOne({ Personal_id: id })
}

service.create = (drug) => {
    drug = new Medicine({
        personId: mongoose.Types.ObjectId(drug.person),
        drugId: drug.drugId,
        drugName: drug.drugName,
        drugPackages: drug.drugPackages,//บรรจุภัณฑ์
        drugPrice: drug.drugPrice,

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