const Appointments = require('./appointments.model').Appointments;
let service = {}

service.call = () => {
    return Appointments.find()
}

service.create = (app) => {
    // app = new Appointments({
    //     // personId: {"type": Physical.mongoose.Schema.Types.ObjectId, "ref":"personal"},
    //     // date: phy.date,
    //     // phyTemp: phy.phyTemp,
    //     // phyPulse: phy.phyPulse,
    //     // phyRespirationRate: phy.phyRespirationRate,
    //     // phyBp: phy.phyBp,
    //     // phyHeight: phy.phyHeight,
    //     // phyWeight:phy.phyWeight,
        



    // })
    // return app.save();
}

service.update = (app, id) => {
    return Appointments.findByIdAndUpdate(id, app, { new: true })
}

service.delete = (id) => {
    return Appointments.findByIdAndRemove(id)
}

// export service module
module.exports = service