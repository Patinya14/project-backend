const  Evalution = require('./evalution.model').General;
const mongoose = require('mongoose'); 
let service = {}  

service.call = () => {
    return Evalution.find()
}

service.create = (eva) => {
   eva = new Evalution({
        personId : mongoose.Types.ObjectId(eva.person),
        evaDate: eva.evaDate,
        evaAfter: eva.evaAfter,
       
     
      
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