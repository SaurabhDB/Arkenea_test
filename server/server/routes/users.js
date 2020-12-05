var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('./../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.model

  res.send('This is users get call');
});

router.post('/:id', function(req, res, next) {
  res.send('This is users post call');
});

router.put('/:id', function(req, res, next) {
  res.send('This is users put call');
});

router.delete('/:id', function(req, res, next) {
  res.send('This is users delete call');
});

module.exports = router;
