"use strict";

const user = require("../lib/mongo").user;
const mongoose = require("mongoose");

// var usertest = {
// 	_id 		: 1,
// 	name 		: "mk1",
// 	pwd 		: "abc",		
// }

module.exports = {
	//注册新用户


	create: function (users) {

		let _user = mongoose.model("create",user);

		let createuser = new _user(users); 

		return createuser.save();

	}

	
}