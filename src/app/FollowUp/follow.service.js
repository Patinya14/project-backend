const Follow = require('./follow.model').Follow;
let service = {}  

service.call = () => {
    return Follow.find()
}

service.create = (fol) => {
    fol = new Follow({
        
    })
    return fol.save(); 
}

service.update = (fol, id) => {
    return Follow.findByIdAndUpdate(id, fol, { new: true })
}

service.delete = (id) => {
    return Follow.findByIdAndRemove(id)
}

// export service module
module.exports = service