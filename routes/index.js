// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;


var config = require('config');

exports.index = function(req, res){
	res.render('index', { 
	  host: config.server.host,
	  port: config.server.listen
	});
};