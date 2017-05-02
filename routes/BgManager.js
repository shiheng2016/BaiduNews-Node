var express = require('express');
var app = express();
var orm = require('orm');

//DB inform
var dbusername = "root";
var dbpassword = "123456";
var dbname = "baidunews";

//当前请求的根目录
app.get('/', function(req, res, next) {
    res.render('BgManager', {});
});

//想了很多办法简化代码可是数据查询这关过不了，也找不到相关方法，恼火
//news_recommend
app.use('/news_recommend', orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
    define: function(db, models, next) {
        models.news_recommend = db.define("news_recommend", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
app.get('/news_recommend', function(req, res, next) {
    req.models.news_recommend.find({}, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});
app.post('/news_recommend/add', function(req, res, next) {
    req.models.news_recommend.create({
        title: req.body.title,
        img_url: req.body.img_url,
        content: req.body.content,
        from: req.body.from,
        time: req.body.time
    }, function(err, news) {
        res.status(200);
        res.json(news);
    });
});
app.post('/news_recommend/edit', function(req, res, next) {
    req.models.news_recommend.get(req.body.id, function(err, item) {
        item.save({
            title: req.body.title,
            img_url: req.body.img_url,
            content: req.body.content,
            from: req.body.from,
            time: req.body.time
        }, function(err) {
            console.log(req.body.id + "保存成功！");
            res.status(200);
            res.send(true);
        });
    });
});
app.post('/news_recommend/delete', function(req, res, next) {
    // console.log(req.body.idsDel);
    var deleteid = req.body.idsDel.split(',');
    for (var i = 0; deleteid.length > i; i++) {
        req.models.news_recommend.get(deleteid[i], function(err, item) {
            item.remove(function(err) {
                console.log("删除成功！");
                res.status(200);
                res.send(true);
            });
        });
    }
});



//news_baijia
app.use('/news_baijia', orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
    define: function(db, models, next) {
        models.news_baijia = db.define("news_baijia", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
app.get('/news_baijia', function(req, res, next) {
    req.models.news_baijia.find({}, ["time", "Z"], function(err, news) {
        res.json(news);
    });
});
app.post('/news_baijia/add', function(req, res, next) {
    //    console.log(req.body.title);
    req.models.news_baijia.create({
        title: req.body.title,
        img_url: req.body.img_url,
        content: req.body.content,
        from: req.body.from,
        time: req.body.time
    }, function(err, news) {
        res.status(200);
        res.json(news);
    });
});
app.post('/news_baijia/edit', function(req, res, next) {
    req.models.news_baijia.get(req.body.id, function(err, item) {
        item.save({
            title: req.body.title,
            img_url: req.body.img_url,
            content: req.body.content,
            from: req.body.from,
            time: req.body.time
        }, function(err) {
            console.log(req.body.id + "保存成功！");
            res.status(200);
            res.send(true);
        });
    });
});
app.post('/news_baijia/delete', function(req, res, next) {
    // console.log(req.body.idsDel);
    var deleteid = req.body.idsDel.split(',');
    for (var i = 0; deleteid.length > i; i++) {
        req.models.news_baijia.get(deleteid[i], function(err, item) {
            item.remove(function(err) {
                console.log("删除成功！");
                res.status(200);
                res.send(true);
            });
        });
    }
});


//news_local
app.use('/news_local', orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
    define: function(db, models, next) {
        models.news_local = db.define("news_local", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
app.get('/news_local', function(req, res, next) {
    req.models.news_local.find({}, ["time", "Z"], function(err, news) {
        res.json(news);
    });
});
app.post('/news_local/add', function(req, res, next) {
    //    console.log(req.body.title);
    req.models.news_local.create({
        title: req.body.title,
        img_url: req.body.img_url,
        content: req.body.content,
        from: req.body.from,
        time: req.body.time
    }, function(err, news) {
        res.status(200);
        res.json(news);
    });
});
app.post('/news_local/edit', function(req, res, next) {
    req.models.news_local.get(req.body.id, function(err, item) {
        item.save({
            title: req.body.title,
            img_url: req.body.img_url,
            content: req.body.content,
            from: req.body.from,
            time: req.body.time
        }, function(err) {
            console.log(req.body.id + "保存成功！");
            res.status(200);
            res.send(true);
        });
    });
});
app.post('/news_local/delete', function(req, res, next) {
    // console.log(req.body.idsDel);
    var deleteid = req.body.idsDel.split(',');
    for (var i = 0; deleteid.length > i; i++) {
        req.models.news_local.get(deleteid[i], function(err, item) {
            item.remove(function(err) {
                console.log("删除成功！");
                res.status(200);
                res.send(true);
            });
        });
    }
});


//news_internet
app.use('/news_internet', orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
    define: function(db, models, next) {
        models.news_internet = db.define("news_internet", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
app.get('/news_internet', function(req, res, next) {
    req.models.news_internet.find({}, ["time", "Z"], function(err, news) {
        res.json(news);
    });
});
app.post('/news_internet/add', function(req, res, next) {
    //    console.log(req.body.title);
    req.models.news_internet.create({
        title: req.body.title,
        img_url: req.body.img_url,
        content: req.body.content,
        from: req.body.from,
        time: req.body.time
    }, function(err, news) {
        res.status(200);
        res.json(news);
    });
});
app.post('/news_internet/edit', function(req, res, next) {
    req.models.news_internet.get(req.body.id, function(err, item) {
        item.save({
            title: req.body.title,
            img_url: req.body.img_url,
            content: req.body.content,
            from: req.body.from,
            time: req.body.time
        }, function(err) {
            console.log(req.body.id + "保存成功！");
            res.status(200);
            res.send(true);
        });
    });
});
app.post('/news_internet/delete', function(req, res, next) {
    // console.log(req.body.idsDel);
    var deleteid = req.body.idsDel.split(',');
    for (var i = 0; deleteid.length > i; i++) {
        req.models.news_internet.get(deleteid[i], function(err, item) {
            item.remove(function(err) {
                console.log("删除成功！");
                res.status(200);
                res.send(true);
            });
        });
    }
});

//news_science
app.use('/news_science', orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
    define: function(db, models, next) {
        models.news_science = db.define("news_science", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
app.get('/news_science', function(req, res, next) {
    req.models.news_science.find({}, ["time", "Z"], function(err, news) {
        res.json(news);
    });
});
app.post('/news_science/add', function(req, res, next) {
    //    console.log(req.body.title);
    req.models.news_science.create({
        title: req.body.title,
        img_url: req.body.img_url,
        content: req.body.content,
        from: req.body.from,
        time: req.body.time
    }, function(err, news) {
        res.status(200);
        res.json(news);
    });
});
app.post('/news_science/edit', function(req, res, next) {
    req.models.news_science.get(req.body.id, function(err, item) {
        item.save({
            title: req.body.title,
            img_url: req.body.img_url,
            content: req.body.content,
            from: req.body.from,
            time: req.body.time
        }, function(err) {
            console.log(req.body.id + "保存成功！");
            res.status(200);
            res.send(true);
        });
    });
});
app.post('/news_science/delete', function(req, res, next) {
    // console.log(req.body.idsDel);
    var deleteid = req.body.idsDel.split(',');
    for (var i = 0; deleteid.length > i; i++) {
        req.models.news_science.get(deleteid[i], function(err, item) {
            item.remove(function(err) {
                console.log("删除成功！");
                res.status(200);
                res.send(true);
            });
        });
    }
});

//news_woman
app.use('/news_woman', orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
    define: function(db, models, next) {
        models.news_woman = db.define("news_woman", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
app.get('/news_woman', function(req, res, next) {
    req.models.news_woman.find({}, ["time", "Z"], function(err, news) {
        res.json(news);
    });
});
app.post('/news_woman/add', function(req, res, next) {
    //    console.log(req.body.title);
    req.models.news_woman.create({
        title: req.body.title,
        img_url: req.body.img_url,
        content: req.body.content,
        from: req.body.from,
        time: req.body.time
    }, function(err, news) {
        res.status(200);
        res.json(news);
    });
});
app.post('/news_woman/edit', function(req, res, next) {
    req.models.news_woman.get(req.body.id, function(err, item) {
        item.save({
            title: req.body.title,
            img_url: req.body.img_url,
            content: req.body.content,
            from: req.body.from,
            time: req.body.time
        }, function(err) {
            console.log(req.body.id + "保存成功！");
            res.status(200);
            res.send(true);
        });
    });
});
app.post('/news_woman/delete', function(req, res, next) {
    // console.log(req.body.idsDel);
    var deleteid = req.body.idsDel.split(',');
    for (var i = 0; deleteid.length > i; i++) {
        req.models.news_woman.get(deleteid[i], function(err, item) {
            item.remove(function(err) {
                console.log("删除成功！");
                res.status(200);
                res.send(true);
            });
        });
    }
});

//news_picture
app.use('/news_picture', orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
    define: function(db, models, next) {
        models.news_picture = db.define("news_picture", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
app.get('/news_picture', function(req, res, next) {
    req.models.news_picture.find({}, ["time", "Z"], function(err, news) {
        res.json(news);
    });
});
app.post('/news_picture/add', function(req, res, next) {
    //    console.log(req.body.title);
    req.models.news_picture.create({
        title: req.body.title,
        img_url: req.body.img_url,
        content: req.body.content,
        from: req.body.from,
        time: req.body.time
    }, function(err, news) {
        res.status(200);
        res.json(news);
    });
});
app.post('/news_picture/edit', function(req, res, next) {
    req.models.news_picture.get(req.body.id, function(err, item) {
        item.save({
            title: req.body.title,
            img_url: req.body.img_url,
            content: req.body.content,
            from: req.body.from,
            time: req.body.time
        }, function(err) {
            console.log(req.body.id + "保存成功！");
            res.status(200);
            res.send(true);
        });
    });
});
app.post('/news_picture/delete', function(req, res, next) {
    // console.log(req.body.idsDel);
    var deleteid = req.body.idsDel.split(',');
    for (var i = 0; deleteid.length > i; i++) {
        req.models.news_picture.get(deleteid[i], function(err, item) {
            item.remove(function(err) {
                console.log("删除成功！");
                res.status(200);
                res.send(true);
            });
        });
    }
});

//news_military
app.use('/news_military', orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
    define: function(db, models, next) {
        models.news_military = db.define("news_military", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
app.get('/news_military', function(req, res, next) {
    req.models.news_military.find({}, ["time", "Z"], function(err, news) {
        res.json(news);
    });
});
app.post('/news_military/add', function(req, res, next) {
    //    console.log(req.body.title);
    req.models.news_military.create({
        title: req.body.title,
        img_url: req.body.img_url,
        content: req.body.content,
        from: req.body.from,
        time: req.body.time
    }, function(err, news) {
        res.status(200);
        res.json(news);
    });
});
app.post('/news_military/edit', function(req, res, next) {
    req.models.news_military.get(req.body.id, function(err, item) {
        item.save({
            title: req.body.title,
            img_url: req.body.img_url,
            content: req.body.content,
            from: req.body.from,
            time: req.body.time
        }, function(err) {
            console.log(req.body.id + "保存成功！");
            res.status(200);
            res.send(true);
        });
    });
});
app.post('/news_military/delete', function(req, res, next) {
    // console.log(req.body.idsDel);
    var deleteid = req.body.idsDel.split(',');
    for (var i = 0; deleteid.length > i; i++) {
        req.models.news_military.get(deleteid[i], function(err, item) {
            item.remove(function(err) {
                console.log("删除成功！");
                res.status(200);
                res.send(true);
            });
        });
    }
});

//news_society
app.use('/news_society', orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
    define: function(db, models, next) {
        models.news_society = db.define("news_society", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
app.get('/news_society', function(req, res, next) {
    req.models.news_society.find({}, ["time", "Z"], function(err, news) {
        res.json(news);
    });
});
app.post('/news_society/add', function(req, res, next) {
    //    console.log(req.body.title);
    req.models.news_society.create({
        title: req.body.title,
        img_url: req.body.img_url,
        content: req.body.content,
        from: req.body.from,
        time: req.body.time
    }, function(err, news) {
        res.status(200);
        res.json(news);
    });
});
app.post('/news_society/edit', function(req, res, next) {
    req.models.news_society.get(req.body.id, function(err, item) {
        item.save({
            title: req.body.title,
            img_url: req.body.img_url,
            content: req.body.content,
            from: req.body.from,
            time: req.body.time
        }, function(err) {
            console.log(req.body.id + "保存成功！");
            res.status(200);
            res.send(true);
        });
    });
});
app.post('/news_society/delete', function(req, res, next) {
    // console.log(req.body.idsDel);
    var deleteid = req.body.idsDel.split(',');
    for (var i = 0; deleteid.length > i; i++) {
        req.models.news_society.get(deleteid[i], function(err, item) {
            item.remove(function(err) {
                console.log("删除成功！");
                res.status(200);
                res.send(true);
            });
        });
    }
});

//news_entertainment
app.use('/news_entertainment', orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
    define: function(db, models, next) {
        models.news_entertainment = db.define("news_entertainment", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
app.get('/news_entertainment', function(req, res, next) {
    req.models.news_entertainment.find({}, ["time", "Z"], function(err, news) {
        res.json(news);
    });
});
app.post('/news_entertainment/add', function(req, res, next) {
    //    console.log(req.body.title);
    req.models.news_entertainment.create({
        title: req.body.title,
        img_url: req.body.img_url,
        content: req.body.content,
        from: req.body.from,
        time: req.body.time
    }, function(err, news) {
        res.status(200);
        res.json(news);
    });
});
app.post('/news_entertainment/edit', function(req, res, next) {
    req.models.news_entertainment.get(req.body.id, function(err, item) {
        item.save({
            title: req.body.title,
            img_url: req.body.img_url,
            content: req.body.content,
            from: req.body.from,
            time: req.body.time
        }, function(err) {
            console.log(req.body.id + "保存成功！");
            res.status(200);
            res.send(true);
        });
    });
});
app.post('/news_entertainment/delete', function(req, res, next) {
    // console.log(req.body.idsDel);
    var deleteid = req.body.idsDel.split(',');
    for (var i = 0; deleteid.length > i; i++) {
        req.models.news_entertainment.get(deleteid[i], function(err, item) {
            item.remove(function(err) {
                console.log("删除成功！");
                res.status(200);
                res.send(true);
            });
        });
    }
});
// app.listen(80);


module.exports = app;
