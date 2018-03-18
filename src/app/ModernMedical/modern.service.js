const Modern = require('./modern.model').Modern;
const mongoose = require('mongoose'); 
let service = {}  

service.call = () => {
    return Modern.find()
}

service.create = (modern) => {
    modern = new Modern({
        moderndiagnosis: moddern.moderndiagnosis
       
    })
    return modern.save(); 
}

service.update = (modern, id) => {
    return Modern.findByIdAndUpdate(id, modern, { new: true })
}

service.delete = (id) => {
    return Modern.findByIdAndRemove(id)
}

// export service module
module.exports = service