var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var validator = require('validator');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('command', { title: 'Commandez votre course' });
});



router.post('/connect', function(req, res, next) {
  // vérification que l'utilisateur est en base de données & que les mots de passe sont identiques
  // ouverture d'une session
  console.log(req.body)
  res.render('command', { title: 'Commandez votre course' });
});

router.post('/coursier', function(req, res, next) {
  // récupérer l'intégralité des courses proposées
  // les afficher dans la view
  console.log(req.body)
  res.render('coursier', { title: 'Espace coursier' });
});

module.exports = router;
