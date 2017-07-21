const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const config = require("../config/default");

mongoose.Promise = global.Promise; 

console.log(config.mongodb);

const db = mongoose.connect(config.mongodb, function (err) {
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