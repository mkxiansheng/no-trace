var express = require('express');
var router = express.Router();

var marked = require('marked');

var getMsg = require('../models/author.js');

router.get('/:authorId', function(req, res) {

	var _uid = req.params.authorId;

	getMsg.getAuthor(_uid).then(function (product) {

		product.map(function(post){
			post.content = marked(post.content);
			return post;
		})		

		res.render('author',{articles: product})

	});

});

module.exports = router;