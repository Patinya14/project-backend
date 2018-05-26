var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FollowSchema = new Schema({
    personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    
    folDate: String, //วันที่นัดหมาย
    folmytimeHour: String, 
    folmytimeMinute: String,
    folPurpose: String, //จุดประสงค์
    

});

var Follow = mongoose.model('follow', FollowSchema);

module.exports = {
    Follow
};