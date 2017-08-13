/**
 * login.js
 * @authors mk
 * @date    2017-05-21
 * @version 1.0.0
 */

"use strict";

const user = require('../lib/mongo').user;
const mongoose = require('mongoose');

module.exports = {

	// 获取用户信息
	getUser: function (name) {
	
		let _name = name;

		let _user = mongoose.model("create",user);
		
		return _user.findOne({'name': _name});
	
	}
}
