/**
 * article.js
 * @authors mk
 * @date    2017-05-22 23:32:39
 * @version 1.0.0
 */

var post = require("../lib/mongo").post;
var user = require("../lib/mongo").user;
var mongoose = require("mongoose");

module.exports = {

	//获取文章列表
	getArticles: function () {

		var _article = mongoose.model("post",post);

		var _user = mongoose.model("create",user);

		return _article
					.find()
					.populate({path: 'author', model:_user,select: 'name'})
					.sort({ _id: -1 });

	}

}