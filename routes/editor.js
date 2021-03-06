"use strict";

const express = require('express');
const router = express.Router();

const checkLogin = require('../middleware/check').checkLogin;

const postmodel = require("../models/post");

router.get('/', checkLogin, function(req, res, next) {
	res.render('editor',{title:'编辑'})
});

router.post('/', checkLogin, function (req, res) {
	console.log("in pust");
	console.log(req.body.title);
	console.log(req.body.content);

	let title = req.body.title;
	let content = req.body.content;

	try {
	    if (!title.length) {
	    	console.log("请填写标题");
	    	throw new Error('请填写标题');
	    }
		if (!content.length) {
			console.log("请填写标题");
			throw new Error("请填写标题");
		}
	} catch (e) {
		console.log(e.message);
		return res.redirect("/editor");
	}

	let article = {
		author 		: req.session.user,
		title 		: title,
		content 	: content,
		data 		: Date.now()
	}

	postmodel.create(article).then(function (product) {
		console.log("post product:");
		console.log(product);
		if (product) {
			res.redirect('/');
		}
	})
	.catch(function (err) {
		res.redirect('back');
	})

})

module.exports = router;