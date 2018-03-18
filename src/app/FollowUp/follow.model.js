var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var FollowSchema = new Schema({
   folID: String,
   folName: String,
   folSurName: String,
   folDateout: String,
   folPhysicianName: String,
   folTime: String,
   folPurpose: String

});

var Follow = mongoose.model('follow', FollowSchema);

module.exports = {
    Follow
};