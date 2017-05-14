var mongoose = require("mongoose");
var Schema = mongoose.Schema;

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

// var user = Schema({
// 	_id 		: Number,
// 	name 		: String,
// 	pwd 		: String,
// });


// var create = mongoose.model("create",user);

// var createUser = new create({_id: 3, name: "mk3", pwd: "123456"});

// createUser.save(function (err) {
// 	if (err) return console.log(err);
// 	console.log("ok!");
// })

exports.user = Schema({
	name 		: String,
	pwd 		: String,
});