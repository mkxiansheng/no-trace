"use strict";

const express = require('express');
const router = express.Router();

const getUserModel = require('../models/login');

const checkNoLogin = require('../middleware/check').checkNoLogin;

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

	let email = req.body.email;
	let password = req.body.password;

	//检验参数
	try {
		if (email) {
			let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
			if (!reg.test(email)) {
				console.log("邮箱格式不对")
				throw new Error("邮箱格式不对");
			}
		}else{
			throw new Error("请输入邮箱");
		}

		if (password.length >= 6) {
			let reg = /^\w+$/;
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
		return res.redirect('/login');
	}

	getUserModel.getUser(email).then(function (product) {
		console.log("product:");
		console.log(product);
		let _pwd = product.pwd;
		let _id = product._id;
		if (!product) {
			return res.redirect('back');
		}
		if (password!==_pwd) {
			return res.redirect('back');
		}

		delete product.pwd;

		req.session.user = product;
		res.redirect('/');

	})
	.catch(function (err) {
		console.log(err);
		res.redirect('/login');
	})


})

module.exports = router;