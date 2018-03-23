var express = require('express');
var router = express.Router();
var validator = require('validator');
var bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'COURSEScourses' });
});

module.exports = router;

router.get('/', function(req, res, next) {
  res.render('command', { title: 'Commandez votre course' });
});

router.post('/', function(req, res, next) {
  // création d'un utilisateur
  // sauvegarde en base de données

            // DON'T TRUST THE USERINFO
  var userInfo = req.body;
  var errors = [];

  if (!validator.isEmail(userInfo.mail)){
    errors.push("email invalide");
  }
  if (userInfo.prenom.length < 2 || userInfo.prenom.length > 25 || !userInfo.prenom){
    errors.push("votre prenom doit contenir entre 2 et 15 characteres");
  }
  if (userInfo.nom.length < 2 || userInfo.nom.length > 25 || !userInfo.nom){
    errors.push("votre nom doit contenir entre 2 et 15 characteres");
  }

  if (userInfo.password != userInfo.password2 || !userInfo.password){
    errors.push("mot de passe non identiques");
  }

  if (errors.length > 0){
    res.render('index', { errors: errors });
  } else {
    var encryptedPassword = bcrypt.hash(userInfo.password, 10);
    res.redirect('/users', { title: 'Commandez votre course' });
    // res.render('command', { title: 'Commandez votre course' });
  }
});



module.exports = router;
