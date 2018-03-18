const Treatment = require('./treatment.model').Treatment;
let service = {}  

service.call = () => {
    return Treatment.find()
}

service.create = (treat) => {
    treat = new Treatment({
       
    })
    return treat.save(); 
}

service.update = (treat, id) => {
    return Treatment.findByIdAndUpdate(id,treat, { new: true })
}

service.delete = (id) => {
    return Treatment.findByIdAndRemove(id)
}

// export service module
module.exports = service