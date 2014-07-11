var express = require("express")
,	url = require("url")
,	path = require("path")
,	config=require('config');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swagger=require('swagger-node-express');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/index');
var users = require('./routes/users');
var post = require('./routes/post');
var reply = require('./routes/reply');

app.get('/', routes.index);
//app.use('/users', users);

var models = require('./models/models')

swagger.configureSwaggerPaths("", "/api-docs", "");
swagger.setAppHandler(app);
swagger.addModels(models);

swagger.addGet(users.getUser);
swagger.addGet(users.getUserByNo);
swagger.addGet(users.getUserDetailInfo);
swagger.addPost(users.joinMember);
swagger.addDelete(users.withdrawMember);
// etc...

swagger.addGet(post.getPostListByUser);
swagger.addGet(post.getPostById);
swagger.addGet(post.getLatestPostList);
swagger.addPost(post.writePost);
swagger.addPut(post.updatePost);
swagger.addDelete(post.deletePost);
// etc...

swagger.addGet(reply.getReplyList);
swagger.addPost(reply.writeReply);
swagger.addPut(reply.updateReply);
swagger.addDelete(reply.deleteReply);
// etc...

swagger.configure('http://' + config.server.host + ':' + config.server.listen, '1.1');

var express_server={
	init:function(){
		// 
		
		app.listen(config.server.listen);
	}
};

/// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', config.server.listen || 9000);

exports.express_server=express_server;