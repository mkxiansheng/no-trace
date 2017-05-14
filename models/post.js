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

		var cb = true;

		var _p = mongoose.model("post",post);

		var createuser = new _p(_post); 

		createuser.save(function (err) {
			if (err) {
				cb = false;
				console.log("err:"+err);
			} else {
				console.log("ok");
			}
		})

		return cb;

	}

	
}