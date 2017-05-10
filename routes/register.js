var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

var usermodel = require("../models/user");

app.use(bodyParser.urlencoded({
 extended:true
}));

router.get('/', function(req, res, next) {
	
	//TODO 
	// var usertest = {
	// 	_id 		: 21,
	// 	name 		: "mk21",
	// 	pwd 		: "abc",		
	// }

	// var _cb = usermodel.create(usertest);

	// console.log("reg:"+_cb);

	console.log(req.body);

	res.render('register',{title:'注册',
		pageTitle:'注册',
		class:'page-register-v3 layout-full site-menubar-hide site-menubar-unfold',
		name:'Full Name',
		email:'Email',
		pwd:'Password',
		repwd:'Re-enter Password'});
});

router.post("/", function (req, res) {
	console.log("in post")
	console.log(req.body);
	console.log(req.query);

});

module.exports = router;