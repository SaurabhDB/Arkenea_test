 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var UserSchema = new Schema({
    userFirstName : {
        type: String,
        unique : false,
        required : true
    },
    userLastName : {
        type: String,
        unique : false,
        required : true
    },
    userEmail  : {
        type: String,
        unique : true,
        required : true
    },  //unique
    userPhoneNumber : {
        type: Number,
        unique : false,
        required : true
    },
    userProfileImage : {
        type: String, 
        unique : false,
        required : false }
 }, 
 {collection: 'Users'})
            
 module.exports = UserSchema;