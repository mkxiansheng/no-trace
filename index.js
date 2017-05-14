var express = require('express');

var bodyParser = require('body-parser');

var hbs = require('hbs');

var flash = require('connect-flash');

// var config = require('config-lite');

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var routers = require('./routes');

var config = require('./config/default');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(session({
  name: config.session.key,// 设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret,// 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  cookie: {
    maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
  },
  store: new MongoStore({// 将 session 存储到 mongodb
    url: config.mongodb// mongodb 地址
  })
}));

app.use(flash());

// 指定模版
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
// 运行模板
app.engine('hbs', hbs.__express);

// 指定静态文件目录
app.use(express.static("public"));


routers(app);

app.listen(4000);