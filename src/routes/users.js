var express = require('express');
var router = express.Router();
const User = require("../models").User;

router.get('/json', function (req, res, next) {
  User.findAll().then(users => {
    res.send(users)
  });
});

module.exports = router;
