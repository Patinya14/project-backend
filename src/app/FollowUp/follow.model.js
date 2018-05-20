var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FollowSchema = new Schema({
    personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    
    folName: String,
    folSurName: String,
    folDate: String,
    folmytimeHour: String,
    folmytimeMinute: String,
    folPhysicianName: String, //ชื่อเเพทย์
    folPurpose: String,
    folduration: String, //ช่วงเวลาการรักษา


});

var Follow = mongoose.model('follow', FollowSchema);

module.exports = {
    Follow
};