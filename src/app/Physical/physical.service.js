const Personal = require('./personal.model').Personal;
let service = {}

service.call = () => {
    return Physical.find()
}

service.create = (phy) => {
    phy = new Physical({



    })
    return phy.save();
}

service.update = (phy, id) => {
    return Physical.findByIdAndUpdate(id, phy, { new: true })
}

service.delete = (id) => {
    return Personal.findByIdAndRemove(id)
}

// export service module
module.exports = service