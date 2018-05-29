var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FollowSchema = new Schema({
    personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    // personId: String,
    // personNameTitle: String,
    // personName: String,
    // personSurname: String,
    folDate: String, //วันที่นัดหมาย
    folmytimeHour: String, 
    folmytimeMinute: String,
    folPurpose: String, //จุดประสงค์
    folDuration: String,

});

var Follow = mongoose.model('follow', FollowSchema);

module.exports = {
    Follow
};