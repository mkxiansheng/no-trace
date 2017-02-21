var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // res.send('hello, express');
  res.render('index',{title:'hbs模板',pageTitle:'模版名'})
});

module.exports = router;