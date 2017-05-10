var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // res.send('hello, express');
  res.render('author',{title:'作者',pageTitle:'模版名'})
});

module.exports = router;