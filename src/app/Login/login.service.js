const Login = require('./login.model').Login;
let service = {}  

service.call = () => {
    return Login.find()
}

service.create = (log) => {
    log = new Login({
        logId: log.logId,
        
    })
    return log.save(); 
}

service.update = (log, id) => {
    return Login.findByIdAndUpdate(id, log, { new: true })
}

service.delete = (id) => {
    return Login.findByIdAndRemove(id)
}

// export service module
module.exports = service