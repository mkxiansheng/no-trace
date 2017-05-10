var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // res.send('hello, express');
  res.render('details',{title:'文章详情',pageTitle:'模版名'})
});

module.exports = router;