var express = require('express');
var router = express.Router();

var getUserModel = require('../models/login');

var checkNoLogin = require('../middleware/check').checkNoLogin;

router.get('/', checkNoLogin, function(req, res) {
  res.render('login',{title:'登录',
  	pageTitle:'登录',
  	class:'page-login-v3 layout-full',
  	email:'Email',
  	pwd:'Password',
  	remember:'Remember me'});
});

router.post('/', checkNoLogin, function (req, res, nex) {
	console.log(req.body.email);
	console.log(req.body.password);

	var email = req.body.email;
	var password = req.body.password;

	//检验参数
	try {
		if (email) {
			var reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
			if (!reg.test(email)) {
				console.log("邮箱格式不对")
				throw new Error("邮箱格式不对");
			}
		}else{
			throw new Error("请输入邮箱");
		}

		if (password.length >= 6) {
			var reg = /^\w+$/;
			if (!reg.test(password)) {
				console.log("密码包含非法字符")
				throw new Error("密码包含非法字符");
			}
		}else{
			console.log("err");
			throw new Error("请输入密码");
		}

	} catch (e) {
		console.log(e.message);
		req.flash('error',e.message);
		return res.redirect('/login');
	}

	getUserModel.getUser(email).then(function (product) {
		console.log("product:");
		console.log(product);
		var _pwd = product.pwd;
		var _id = product._id;
		if (!product) {
			req.flash('error','用户不存在');
			return res.redirect('back');
		}
		if (password!==_pwd) {
			req.flash('error','用户或密码错误');
			return res.redirect('back');
		}
		req.flash('success','登录成功');
		req.session.user = _id;
		res.redirect('/');

	})
	.catch(function (err) {
		console.log(err);
		req.flash('error','登录异常');
		res.redirect('/login');
	})


})

module.exports = router;