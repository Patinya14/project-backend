const Physical = require('./physical.model').Physical;
const mongoose = require('mongoose'); 
let service = {}

service.call = () => {
    return Physical.find().sort({_id: -1});
}
// service.find = (id) => {
//     return Physical.find({ personId: id})
// }
service.create = (phy) => {
    phy = new Physical({
        personId : mongoose.Types.ObjectId(phy.personId),
        date: phy.date,
        phyTemp: phy.phyTemp,
        phyPulse: phy.phyPulse,
        phyRespirationRate: phy.phyRespirationRate,
        phyBp: phy.phyBp,
        phyHeight: phy.phyHeight,
        phyWeight: phy.phyWeight,
        phyetc: phy.phyetc,
        phyBodyParth: phy.phyBodyParth,
        phyLevel: phy.phyLevel,



    })
    return phy.save();
}

service.update = (phy, id) => {
    return Physical.findByIdAndUpdate(id, phy, { new: true })
}

service.delete = (id) => {
    return Physical.findByIdAndRemove(id)
}
// service.calculatorBMI = (phyWeight,phyHeight) => {
//     public = phyweight;
//     public = phyhight;
//     public = sum;
//     sum = phyweight * (pow ^ 2, phyhight);

//     return sum;
 
// }

// export service module
module.exports = service