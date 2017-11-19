var express = require('express');
var router = express.Router();
var data = require('../data/about.me.json');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    data: data,
    title: 'Shibami About'
  });
});

module.exports = router;
