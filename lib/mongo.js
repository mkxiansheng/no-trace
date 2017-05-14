var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var config = require("../config/default");

mongoose.Promise = global.Promise; 

console.log(config.mongodb);

var db = mongoose.connect(config.mongodb, function (err) {
	if (err) {
		console.log("数据库链接失败："+err);
	}else {
		console.log("数据库链接成功！");
	}
})


exports.user = Schema({
	name 		: String,
	pwd 		: String,
});

exports.post = Schema({
	author 		: ObjectId,
	title 		: String,
	content 	: String,
	data 		: Date
});