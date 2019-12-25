var express = require('express');
var router = express.Router();
const User = require("../models").User;
const csv = require('csv');

const usersHeaders = ["UserName", "FirstName", "LastName", "Age"];

router.get('/json', function (req, res, next) {
  User.findAll().then(users => {
    res.send(users)
  });
});

router.post('/csv', function (req, res, next) {
  req.pipe(csv.parse({
    columns: true
  }, function (err, output) {
    if (err) {
      res.status(422).send({ error: err });
    } else {
      User.bulkCreate(output).then(function () {
        res.send({ success: `${output.length} rows` });
      });
    }
  }));
});

router.get('/csv', function (req, res, next) {
  res.setHeader('Content-disposition', 'attachment; filename=users.csv');
  res.set('Content-Type', 'text/csv');

  User.findAll().then(users => {
    csv.stringify(users, {
      header: true,
      columns: usersHeaders
    }).pipe(res);
  });
});

module.exports = router;
