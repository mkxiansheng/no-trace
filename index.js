"use strict";

const express = require('express');

const bodyParser = require('body-parser');

const hbs = require('hbs');

const favicon = require('serve-favicon');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const routers = require('./routes');

const config = require('./config/default');

const app = express();

//favicon.ico
app.use(favicon(__dirname+'/favicon.ico'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(session({
  name: config.session.key,// 设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret,// 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  resave: true,// 强制更新 session
  saveUninitialized: false,// 设置为 false，强制创建一个 session，即使用户未登录
  cookie: {
    maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
  },
  store: new MongoStore({// 将 session 存储到 mongodb
    url: config.mongodb// mongodb 地址
  })
}));


// 添加模板必需的三个变量
app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  next();
});

// 指定模版
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
// 运行模板
app.engine('hbs', hbs.__express);

//模板继承
var blocks = {};

hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }

    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});

hbs.registerHelper('block', function(name) {
    var val = (blocks[name] || []).join('\n');

    // clear the block
    blocks[name] = [];
    return val;
});

// 指定静态文件目录
app.use(express.static("public"));


routers(app);

app.listen(4000);