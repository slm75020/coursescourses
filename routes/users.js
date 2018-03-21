var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('command', { title: 'Commandez votre course' });
});

module.exports = router;
