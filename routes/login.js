var express = require('express');
// var router = express.Router();
var app = express();
/* GET users listing. */

app.get('/', function(req, res, next) {
    res.render('login', {
        title: 'BaiduNews后台管理登录'
    });

});

//前端login.js发送ajax到./doLogin这个请求路由进行处理
app.post('/doLogin', function(req, res, next) {
    var user = {
        username: 'admin',
        password: 'admin'
    };
    if (req.body.username === user.username && req.body.password === user.password) {
        res.send(true);
    } else {
        res.send(false);
    };
});

module.exports = app;
