"use strict";

const express = require('express');
const app = express();
const router = express.Router();

const usermodel = require("../models/user");
const check = require('../middleware/check').check;


router.post('/', check, function(req, res, next) {
	console.log(req.body.email);
	console.log(req.body.password);
	console.log(req.body.PasswordCheck);

	let email = req.body.email;
	let password = req.body.password;
	let passwordCheck = req.body.PasswordCheck;

	let ret = {};

	//校验参数
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
		if (password) {
			if (password === passwordCheck) {
				console.log("in");
				let reg = /^\w+$/;
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
		ret = {
			Code: -1,
			error: '验证错误'
		}
		// req.flash('error', e.message);
		return res.send(ret);
	}

	let userInfo = {
		name 		: email,
		pwd 		: password,		
	}

	usermodel.create(userInfo).then(function (product) {
		console.log("product:");
		console.log(product);
		if (product) {
			delete product.pwd;
			req.session.user = product;
			let ret = {
				Code: 0
			}
			res.send(ret);
		}
	}).catch(function (err) {
		let ret = {
			Code: 1,
			error: '数据库操作错误'
		}
		res.send(ret);
	});
	
});

module.exports = router;