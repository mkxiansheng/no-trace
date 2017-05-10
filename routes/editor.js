var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // res.send('hello, express');
  res.render('editor',{title:'编辑',pageTitle:'模版名'})
});

module.exports = router;