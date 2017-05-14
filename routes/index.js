
module.exports = function (app) {
	
	app.get('/', function (req, res) {
		res.render('index',{title:'no-trace',pageTitle:'模版名'});
	})

	app.use('/users', require('./users'));
	app.use('/register',require('./register'));
	app.use('/login',require('./login'));
	app.use('/author',require('./author'));
	app.use('/details',require('./details'));
	app.use('/forgot-pwd',require('./forgot-pwd'));
	app.use('/editor',require('./editor'));

	app.use(function (req, res) {
		if (!res.headersSent) {
			res.render('404');
		}
	})


};