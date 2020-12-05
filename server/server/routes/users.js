var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("./../models/User");
const UserModel = mongoose.model("User", User);
/* GET users listing. */
router.get("/", function (req, res, next) {
  UserModel.find({}, function (err, data) {
    res.send(data);
    if (err) return console.error(err);
  });
});

router.post("/:id", function (req, res, next) {
  UserModel.create(req.body, function (err, data) {
    res.send(data);
    if (err) return console.error(err);
  });
});

router.put("/:id", function (req, res, next) {
  UserModel.update(req.body, function (err, data) {
    res.send(data);
    if (err) return console.error(err);
  });
});

router.delete("/:id", function (req, res, next) {
  UserModel.deleteOne(req.body, function (err, data) {
    res.send(data);
    if (err) return console.error(err);
  });
});

module.exports = router;
