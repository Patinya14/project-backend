const Physical = require('./physical.model').Physical;
let service = {}

service.call = () => {
    return Physical.find()
}

service.create = (phy) => {
    phy = new Physical({
        // personId: {"type": Physical.mongoose.Schema.Types.ObjectId, "ref":"personal"},
        date: phy.date,
        phyTemp: phy.phyTemp,
        phyPulse: phy.phyPulse,
        phyRespirationRate: phy.phyRespirationRate,
        phyBp: phy.phyBp,
        phyHeight: phy.phyHeight,
        phyWeight: phy.phyWeight,




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