var user = require("../lib/mongo").user;
var mongoose = require("mongoose");

// var usertest = {
// 	_id 		: 1,
// 	name 		: "mk1",
// 	pwd 		: "abc",		
// }

module.exports = {
	//注册新用户


	create: function (users) {

		var cb = true;

		var _user = mongoose.model("create",user);

		var createuser = new _user(users); 

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

	//获取用户信息


	
}