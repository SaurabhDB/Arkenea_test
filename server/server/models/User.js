var mongoose = require('mongoose');

const User = new mongoose.Schema({
    userFirstName : String,
    userLastName : String,
    userEmail  : String,  //unique
    userPhoneNumber : Number,
    userProfileImage : { data: Buffer, contentType: String }
})