var config = require('config');
var cluster = require('cluster');
var initClusterCount = config.cluster.count;
var argv = require('optimist')
	.usage('Usage:%0 --cluster=[num]')
	.describe('cluster', 'cluster count')
	.default('cluster', initClusterCount)	
	.argv;

var express_server = require('./express_server');		

if(cluster.isMaster){
	for(var i=0; i < argv.cluster; i++){
		cluster.fork();
	}
}else{
	
	express_server.express_server.init();
}