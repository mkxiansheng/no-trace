var post = require("../lib/mongo").post;
var mongoose = require("mongoose");

// var posttest = {
	// author 		: ObjectId,
	// title 		: String,
	// content 	: String,
	// data 		: Data
// }

module.exports = {
	//发表文章

	create: function (_post) {

		var _p = mongoose.model("post",post);

		var createpost = new _p(_post); 

		return createpost.save();

	}

	
}