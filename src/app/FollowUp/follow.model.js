var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FollowSchema = new Schema({
    personal: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    treater: { "type": mongoose.Schema.Types.ObjectId, "ref": "treater" },
    date: Date, //วันที่นัดหมาย
    folmytimeHour: String, 
    folmytimeMinute: String,
    folPurpose: String, //จุดประสงค์
    folDuration: String,

});

var Follow = mongoose.model('follow', FollowSchema);

module.exports = {
    Follow
};
