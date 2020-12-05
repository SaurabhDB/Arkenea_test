var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('./../models/User');
const UserModel = mongoose.model('User', User);
/* GET users listing. */
router.get('/', function(req, res, next) {
  UserModel.find().then(
    (successResponse) =>  { 
      console.log('Success : ' + successResponse);
      res.send('This is users get call : '+  res); 
  },
    (errorResponse) =>  { console.log('Error Occurred : ' + errorResponse); }
  )

});

router.post('/:id', function(req, res, next) {
  UserModel.create(req).then(
    (successResponse) =>  { console.log('Success : ' + successResponse); },
    (errorResponse) =>  { console.log('Error Occurred : ' + errorResponse); }
  )
  res.send('This is users post call');
});

router.put('/:id', function(req, res, next) {
  UserModel.findByIdAndUpdate(req.id).then(
    (successResponse) =>  { console.log('Success : ' + successResponse); },
    (errorResponse) =>  { console.log('Error Occurred : ' + errorResponse); }
  )
  res.send('This is users put call');
});

router.delete('/:id', function(req, res, next) {
  UserModel.findByIdAndDelete(req.id).then(
    (successResponse) =>  { console.log('Success : ' + successResponse); },
    (errorResponse) =>  { console.log('Error Occurred : ' + errorResponse); }
  )
  res.send('This is users delete call');
});

module.exports = router;
