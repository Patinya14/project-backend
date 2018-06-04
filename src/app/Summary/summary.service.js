const Summary = require('./summary.model').Summary;
const mongoose = require('mongoose');
let service = {}

service.call = () => {
    return Summary.find().sort({ _id: -1 });
}
// service.find = (id) => {
//     return Summary.find({ personId: id }).sort({ _id: -1 })
// }

service.create = (sum) => {
    sum= new Summary({
       
    })
    return sum.save();
}

service.update = (sum, id) => {
    return Summary.findByIdAndUpdate(id, sum, { new: true })
}

service.delete = (id) => {
    return Summary.findByIdAndRemove(id)
}

// export service module
module.exports = service