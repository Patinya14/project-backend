const  Evalution = require('./evalution.model').Evalution;
const mongoose = require('mongoose'); 
let service = {}  

service.call = () => {
    return Evalution.find()
}
service.find = (id) => {
    return Evalution.find({ personId: id})
}
service.create = (eva) => {
   eva = new Evalution({
        personId : mongoose.Types.ObjectId(eva.personId),
        evaDate: eva.evaDate,
        evaAfter: eva.evaAfter,
        evaBodyParth: eva.evaBodyParth,
       
     
      
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