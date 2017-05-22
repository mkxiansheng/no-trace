/**
 * posts.js
 * @authors mk
 * @date    2017-05-22 23:23:57
 * @version 1.0.0
 */

var express = require('express');
var app = express();
var router = express.Router();

var getArticles = require('../models/article');

router.get('/', function (req, res, next) {

	getArticles.getArticles().then(function (product) {

		console.log('post product');
		console.log(product);

		res.render('index',{articles:product});

	})

});

module.exports = router;