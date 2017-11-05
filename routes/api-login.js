"use strict";

const express = require('express');
const router = express.Router();

const getUserModel = require('../models/login');

const check = require('../middleware/check').check;

router.get('/', check, function(req, res) {
	console.log(req.session.user);
	let ret = {};
	if(req.session.user){
		ret = {
			Code: 0,
			Json: {
				id: req.session.user._id,
				name: req.session.user.name
			}
		}
	}else{
		ret = {
			Code: -6
		}
	}
	return res.send(ret);
});

router.post('/', check, function (req, res, nex) {
	console.log(req.body);
	console.log(req.body.email);
	console.log(req.body.password);

	let email = req.body.email;
	let password = req.body.password;

	// 检验参数
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

		let ret = {
			Code: -1,
			error: '验证不通过'
		}
		return res.send(ret);
	}

	getUserModel.getUser(email).then(function (product) {
		console.log("product:");
		console.log(product);
		let _pwd = product.pwd;
		let _id = product._id;
		if (!product) {
			let ret = {
				Code: -1,
				error: '数据库查询错误'
			}
			return res.send(ret);			
		}
		if (password!==_pwd) {
			let ret = {
				Code: -1,
				error: '账号或密码错误'
			}
			return res.send(ret);			
		}

		delete product.pwd;

		req.session.user = product;

		let ret = {
			Code: 0
		}
		return res.send(ret);		

	})
	.catch(function (err) {
		console.log(err);
		let ret = {
			Code: -1,
			error: '查询数据错误'
		}
		return res.send(ret);
	})

})

module.exports = router;