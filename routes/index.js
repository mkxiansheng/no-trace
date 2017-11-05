"use strict";

module.exports = function (app) {
	
	app.get('/', function (req, res) {
		res.redirect('/index');
	})

	app.use('/index', require('./posts'));
	app.use('/signout', require('./signout'));
	app.use('/register',require('./register'));
	app.use('/login',require('./login'));
	app.use('/author',require('./author'));
	app.use('/details',require('./details'));
	app.use('/forgot-pwd',require('./forgot-pwd'));
	app.use('/editor',require('./editor'));

	// API
	app.use('/api/login', require('./api-login.js'));
	app.use('/api/signout', require('./api-signout.js'));
	app.use('/api/register', require('./api-register.js'));
	
	app.use('/api/posts', require('./api-posts.js'));


	app.use(function (req, res) {
		if (!res.headersSent) {
			res.render('404');
		}
	})


};