var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'COURSEScourses' });
});

module.exports = router;

router.get('./users', function(req, res, next) {
  res.render('command', { title: 'Commandez votre course' });
});

module.exports = router;
