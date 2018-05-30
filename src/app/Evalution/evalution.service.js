const  Evalution = require('./evalution.model').Evalution;
const mongoose = require('mongoose'); 
let service = {}  

service.call = () => {
    return Evalution.find().sort({_id: -1});
}
service.find = (id) => {
    return Evalution.find({ personId: id}).sort({ _id: -1 });
}
service.create = (eva) => {
   eva = new Evalution({
        personId : mongoose.Types.ObjectId(eva.personId),
        evaDate: eva.evaDate,
        evaAfter: eva.evaAfter,
        evaBodyParth: eva.evaBodyParth,
        evaLevel: eva.evaLevel,
     
      
    })
    return eva.save(); 
}

service.update = (eva, id) => {
    return evalution.findByIdAndUpdate(id, eva, { new: true })
}

service.delete = (id) => {
    return evalution.findByIdAndRemove(id)
}

// export service module
module.exports = service