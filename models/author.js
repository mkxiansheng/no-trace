/**
 * author.js
 * @authors mk
 * @date    2017-05-23 16:01:35
 * @version 1.0.0
 */

var post = require("../lib/mongo").post;
var user = require("../lib/mongo").user;
var mongoose = require("mongoose");

module.exports = {

	//获取文章列表
	getAuthor: function (id) {

		var _article = mongoose.model("post",post);

		var _user = mongoose.model("create",user);

		return _article
					.find({author: id})
					.populate({path: 'author', model:_user,})
					.sort({ _id: -1 });

	}

}