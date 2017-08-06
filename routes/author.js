"use strict";

const express = require('express');
const router = express.Router();

const marked = require('marked');

const getMsg = require('../models/author.js');

router.get('/:authorId', function(req, res) {

	let _uid = req.params.authorId;

	getMsg.getAuthor(_uid).then(function (product) {

		product.map(function(post){
			post.content = marked(post.content);
			return post;
		})		

		res.render('author',{articles: product})

	});

});

module.exports = router;