var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FollowSchema = new Schema({
    // folID: String,
    folName: String,
    folSurName: String,
    folDate: Date,
    folmytimeHour: String,
    // folmytimeMinute: String,
    folPhysicianName: String,
    folPurpose: String,
    folduration: String,


});

var Follow = mongoose.model('follow', FollowSchema);

module.exports = {
    Follow
};