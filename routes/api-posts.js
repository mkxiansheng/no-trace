/**
 * posts.js
 * @authors mk
 * @date    2017-11-05 18:11:00
 * @version 1.0.0
 */

"use strict";

const express = require('express');
const app = express();
const router = express.Router();

const marked = require('marked');

const getArticles = require('../models/article');
const check = require('../middleware/check').check;


router.get('/', check, function (req, res, next) {

	getArticles.getArticles().then(function (product) {
		
		product.map(function(post){
			post.content = marked(post.content);
			return post;
		})

		let ret = {
			Code: 0,
			Json: {
				posts: product
			}
		}

		res.send(ret);

	})

});

module.exports = router;