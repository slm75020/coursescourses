var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('command', { title: 'Commandez votre course' });
});

router.post('/', function(req, res, next) {
  // création d'un utilisateur
  // sauvegarde en base de données
  var userInfo = req.body;
  var errors = [];

  if (!validator.isEmail(userInfo.mail)){
    errors.push("invalid email");
  }
  if (userInfo.prenom.length < 2 || userInfo.prenom.length > 25){
    errors.push("votre nom doit contenir entre 2 et 15 characteres");
  }
  if (userInfo.nom.length < 2 || userInfo.nom.length > 25){
    errors.push("votre nom doit contenir entre 2 et 15 characteres");
  }
  
  if (userInfo.password != userInfo.password2){
    errors.push("mot de passe non identiques");
  }

  if (errors.length > 0){
    res.render({title:  errors: errors});
  } else {
    var encryptedPassword = await bcrypt.hash(userInfo.password, 10);res.send(t);
    res.send(encryptedPassword);
  }
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
