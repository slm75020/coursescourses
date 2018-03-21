var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('courses', {})
})

router.post('/', (req, res, next) => {
  // création d'une course
  // sauvegarde en base de données
})

module.exports = router;
