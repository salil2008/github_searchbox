// var knex = require('knex')({
// 	client: 'pg',
// 	connection: {
// 	    host     : 'ec2-54-163-224-108.compute-1.amazonaws.com',
// 			port: 5432,
//         user     : 'klgevxyemxznyx',
//         password : '934d15e1669c7413669ae386f7f0517972eadb40995a6dff358922291246793b',
//         database : 'de8rgh8tv2v743',
// 				ssl : true
// 	}
// });
//Using postgress as mysql instance is down!!!
var twitter = require('twitter');
var config = require('../../config');
var twit = new twitter(config.twitter);
var async = require('async');
var _ = require('underscore');
var sockets = require('../../socketEvents');
var io;
console.log(sockets);
console.log('DB Connection Established');

var knex = require('knex')({
	client: 'mysql',
	connection: {
	    host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'deltax_task2'
	}
});

var self = module.exports = {
  //Methods Here
	sockets : function(server){
		io = require('socket.io').listen(server);
	}

}
