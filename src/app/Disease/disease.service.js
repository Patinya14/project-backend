const Disease = require('./disease.model').Disease;
const mongoose = require('mongoose');
let service = {}  

service.call = () => {
    return Disease.find().sort({_id: -1});
}
service.find = (id) => {
    return Disease.find({personId : id}).sort({ _id: -1 });
}
service.create = (dis) => {
    dis = new Disease({
        date: dis.date,
        time: dis.time,
        disName: dis.disName,
        disID:  dis.disID,//รหัสโรค
        disProcedure: dis.disProcedure,
        disBodyParth: dis.disBodyParth
    })
    return dis.save(); 
}

service.update = (dis, id) => {
    return Disease.findByIdAndUpdate(id,dis, { new: true })
}

service.delete = (id) => {
    return Disease.findByIdAndRemove(id)
}
// export service module
module.exports = service


