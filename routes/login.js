var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('login',{title:'登录',
  	pageTitle:'登录',
  	class:'page-login-v3 layout-full',
  	email:'Email',
  	pwd:'Password',
  	remember:'Remember me'});
});

module.exports = router;