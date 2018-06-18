const Summary = require('./summary.model').Summary;
const mongoose = require('mongoose');
const PDF = require('pdfkit');
const fs = require('fs');
let service = {}

service.call = () => {
    return Summary.find().populate("disease").sort({ _id: -1 });
}
service.find = (id) => {
    return Summary.find({ personId: id }).populate("disease").populate("treater").sort({ _id: -1 })
}

service.document = () => {
    doc = new PDF;
    doc.pipe(fs.createWriteStream('sumary.pdf'));
    doc.fontSize(15).text('Wally Gator !', 50, 50);
    doc.text('Wally Gator is a swinging alligator in the swamp. He\'s the greatest percolator when he really starts to romp. There has never been a greater operator in the swamp. See ya later, Wally Gator.', {
        width: 410,
        align: 'left'
    });
    doc.end();
}

service.create = (sum) => {
    newsum = new Summary({
        personId: mongoose.Types.ObjectId(sum.personId),
        disease: mongoose.Types.ObjectId(sum.disease), //โรค
        treater: mongoose.Types.ObjectId(sum.treater),
        date: sum.date,
        time: sum.time,
        treatment: sum.treatment, //หัตถการ
        countDrugs: sum.countDrugs,//วิธีการรักษา
        statusTime: sum.statusTime,
    })
    return newsum.save();
}

service.update = (sum, id) => {
    return Summary.findByIdAndUpdate(id, sum, { new: true })
}

service.delete = (id) => {
    return Summary.findByIdAndRemove(id)
}

// export service module
module.exports = service