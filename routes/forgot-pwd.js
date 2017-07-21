const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  // res.send('hello, express');
  res.render('forgot-pwd',{title:'忘记密码',pageTitle:'模版名'})
});

module.exports = router;