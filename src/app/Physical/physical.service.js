const Physical = require('./physical.model').Physical;
const mongoose = require('mongoose'); 
let service = {}

service.call = () => {
    return Physical.find().sort({_id: -1});
}
service.find = (id) => {
    return Physical.find({ personId: id}).sort({_id: -1})
}
service.create = (phy) => {
    newphy = new Physical({
        personId : mongoose.Types.ObjectId(phy.personId),
        date: phy.date,
        time:phy.time,
        phyTime: phy.phyTime,
        phyTemp: phy.phyTemp,
        phyPulse: phy.phyPulse,
        phyRespirationRate: phy.phyRespirationRate,
        phyBp: phy.phyBp,
        phyHeight: phy.phyHeight,
        phyWeight: phy.phyWeight,
        phyBodyParth: phy.phyBodyParth,
        phyLevel: phy.phyLevel,
        phyJoinBodyParth: phy.phyJoinBodyParth,
    })
    return newphy.save();
}

service.update = (phy, id) => {
    return Physical.findByIdAndUpdate(id, phy, { new: true })
}

service.delete = (id) => {
    return Physical.findByIdAndRemove(id)
}
module.exports = service