/**
 * login.js
 * @authors mk
 * @date    2017-05-21
 * @version 1.0.0
 */

var user = require('../lib/mongo').user;
var mongoose = require('mongoose');

module.exports = {

	// 获取用户信息
	getUser: function (name) {
	
		var _name = name;

		var _user = mongoose.model("create",user);
		
		return _user.findOne({'name': _name});
	
	}
}
