/**
 * article.js
 * @authors mk
 * @date    2017-05-22 23:32:39
 * @version 1.0.0
 */

const post = require("../lib/mongo").post;
const user = require("../lib/mongo").user;
const mongoose = require("mongoose");

module.exports = {

	//获取文章列表
	getArticles: function () {

		let _article = mongoose.model("post",post);

		let _user = mongoose.model("create",user);

		return _article
					.find()
					.populate({path: 'author', model:_user,select: 'name'})
					.sort({ _id: -1 });

	}

}