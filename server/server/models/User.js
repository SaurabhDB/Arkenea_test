var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userFirstName : String,
    userLastName : String,
    userEmail  : String,  //unique
    userPhoneNumber : Number,
    userProfileImage : { data: Buffer, contentType: String }
}, {
    timestamps: true
})


module.exports = mongoose.Schema(UserSchema);