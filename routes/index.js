var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/message', function(req, res, next) {
  //res.render('index', { title: 'Back End Services' });
  console.log("Got a req from frontend")
  res.json({msg: 'Welcome to Backend Services!'})
});

module.exports = router;
