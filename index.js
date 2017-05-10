var express = require('express');
var app = express();

var hbs = require('hbs');

var indexRouter = require('./routes/index');
var userRouter 	= require('./routes/users');
var register 	= require('./routes/register');
var login 	 	= require('./routes/login');
var author 	 	= require('./routes/author');
var details 	= require('./routes/details');
var editor 	 	= require('./routes/editor');
var forgotPwd 	 	= require('./routes/forgot-pwd');

// 指定模版
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
// 运行模板
app.engine('hbs', hbs.__express);

// 指定静态文件目录
app.use(express.static("public"));

// 路由
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/register',register);
app.use('/login',login);
app.use('/author',author);
app.use('/details',details);
app.use('/forgot-pwd',forgotPwd);


app.listen(4000);