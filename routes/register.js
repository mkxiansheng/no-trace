var express = require('express');
var app = express();
var router = express.Router();

var usermodel = require("../models/user");

router.get('/', function(req, res, next) {

	res.render('register',{title:'注册',
		pageTitle:'注册',
		class:'page-register-v3 layout-full site-menubar-hide site-menubar-unfold',
		name:'Full Name',
		email:'Email',
		pwd:'Password',
		repwd:'Re-enter Password',
		error: req.flash('error')});
});

router.post('/', function(req, res, next) {
	console.log(req.body.email);
	console.log(req.body.password);
	console.log(req.body.PasswordCheck);

	var email = req.body.email;
	var password = req.body.password;
	var passwordCheck = req.body.PasswordCheck;

	//校验参数
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
		if (password) {
			if (password === passwordCheck) {
				console.log("in");
				var reg = /^\w+$/;
				if (!reg.test(password)) {
					console.log("密码包含非法字符")
					throw new Error("密码包含非法字符");
				}
			} else {
				console.log("两次输入的密码不一致");
				throw new Error("两次输入的密码不一致");
			}
		}else{
			console.log("err");
			throw new Error("请输入密码");
		}


	}catch (e) {
		console.log(e.message);
		req.flash('error', e.message);
		return res.redirect('/register');
	}

	var userInfo = {
		name 		: email,
		pwd 		: password,		
	}

	usermodel.create(userInfo).then(function (product) {
		console.log("product:");
		console.log(product);
		if (product) {
			req.session.user = product;
			req.flash('success','注册成功');
			res.redirect('/');
		}
	}).catch(function (err) {
		req.flash('error','注册异常,请重试');
		res.redirect('/register');
	});
	
});

module.exports = router;