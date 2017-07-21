const express = require('express');
const router = express.Router();

const marked = require('marked');

const getDetails = require('../models/article_details.js');


//通过文章id取到详细的文章信息
router.get('/:postId', function(req, res, next) {
  
  let _pid = req.params.postId;

  getDetails.getArticle(_pid).then(function (product) {

	product.map(function(post){
		post.content = marked(post.content);
		return post;
	})

	res.render('details',{detail:product});

  });
  
});

module.exports = router;