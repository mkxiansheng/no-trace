/**
 * posts.js
 * @authors mk
 * @date    2017-05-22 23:23:57
 * @version 1.0.0
 */

const express = require('express');
const app = express();
const router = express.Router();

const marked = require('marked');

const getArticles = require('../models/article');


router.get('/', function (req, res, next) {

	getArticles.getArticles().then(function (product) {
		
		product.map(function(post){
			post.content = marked(post.content);
			return post;
		})

		res.render('index',{articles:product});

	})

});

module.exports = router;