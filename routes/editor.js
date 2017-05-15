var express = require('express');
var router = express.Router();

var postmodel = require("../models/post");

router.get('/', function(req, res, next) {
	console.log(req.session)
	res.render('editor',{title:'编辑'})
});

router.post('/', function (req, res) {
	console.log("in pust");
	console.log(req.body.title);
	console.log(req.body.content);

	var title = req.body.title;
	var content = req.body.content;

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
		req.flash('error',e.message);
		return res.redirect("/editor");
	}
})

module.exports = router;