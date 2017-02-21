var express = require('express');
var app = express();

var hbs = require('hbs');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

// 指定模版
app.set('view engine', 'hbs');

// 运行模板
app.engine('hbs', hbs.__express);

// 路由
app.use('/', indexRouter);
app.use('/users', userRouter);


app.listen(4000);

