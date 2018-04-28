var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FollowSchema = new Schema({
    personId: {"type": mongoose.Schema.Types.ObjectId, "ref":"personal"},
    
    folName: String,
    folSurName: String,
    folDate: String,
    folmytimeHour: String,
    folPhysicianName: String,
    folPurpose: String,
    folduration: String,


});

var Follow = mongoose.model('follow', FollowSchema);

module.exports = {
    Follow
};