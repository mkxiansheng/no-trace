"use strict";

const post = require("../lib/mongo").post;
const mongoose = require("mongoose");

// var posttest = {
	// author 		: ObjectId,
	// title 		: String,
	// content 	: String,
	// data 		: Data
// }

module.exports = {
	//发表文章

	create: function (_post) {

		let _p = mongoose.model("post",post);

		let createpost = new _p(_post); 

		return createpost.save();

	}

	
}