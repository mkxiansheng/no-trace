/**
 * article_details.js
 * @authors mk
 * @date    2017-05-23 14:42:43
 * @version 1.0.0
 */

var post = require("../lib/mongo").post;
var user = require("../lib/mongo").user;
var mongoose = require("mongoose");

module.exports = {

	//获取文章列表
	getArticle: function (id) {

		var _article = mongoose.model("post",post);

		var _user = mongoose.model("create",user);

		return _article
					.find({_id: id})
					.populate({path: 'author', model:_user,select: 'name'})
					.sort({ _id: -1 });

	}

}