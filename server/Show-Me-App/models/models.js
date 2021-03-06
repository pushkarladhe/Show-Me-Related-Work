var async = require('async');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var config = require('../config.json');
var UserModel = require('./users.js');
var PaperModel = require('./papers.js');
var DomainModel = require('./domains.js');
var RelationModel = require('./relations.js');

var exports = module.exports = {};
var connectToMongo = function(){
	var mongoURL = config.mongoURL;
	
	mongoose.connect(mongoURL,{
  		useMongoClient: true
	});	

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

var getRandom = function(max){
	return Math.floor(Math.random()*max);
}

exports.createModels = function(){
	connectToMongo();
	
		// console.log(data[i][0], data[i][1], data[i][2]);
		// PaperModel.find({'paperId':'1'}).exec(function(err, from){
		// 	if(err) console.log(err);
		// 	if(!err){
		// 	PaperModel.find({'paperId':'3'}).exec(function(err, to){
		// 		if(!err){
		// 		console.log(from[0].title);
		// 		console.log(to[0].title);
		// 		var some = new RelationModel({relationId: "2", relationFrom: from[0], relationTo:to[0], upvotes:[], downvotes:[], comments:[]});
		// 		some.save(function(err){
		// 			if(err) console.log('Err', err);
		// 			else console.log('saved successfully');	
		// 		})
		// 	}
		// 	});
		// }
		// });
	
	// var papers = [];
	// PaperModel.find().select('_id').exec(function(err, domains){
	// 	console.log(domains);
	// 	object = [];
	// 	for(var i=0; i<domains.length; i++){
	// 		object.push(domains[i]._id);
	// 	}
	// 	domainsDetail = {domainName: 'Domain 1', papers:object, id: '1'};
	// 	var domain = new DomainModel(domainsDetail);
	// 	domain.save(function(err){
	// 		if(err) console.log(err);
	// 		else console.log('saved');
	// 	});
	// });
	
	// for(var i=0; i<50; i++){
	// 	var paperDetail = {paperId:(i).toString(), title:"Paper "+(i).toString(), authors:["Apoorv Khairnar", "Pushkar Ladhe"], date:Date.now()};
	// 	var paper = new PaperModel(paperDetail);
	// 	paper.save(function(err){
	// 		if(err) console.log(err);
	// 		else console.log('New Paper : ' + i.toString());
	// 	});
	// }

	// PaperModel.find().select('_id').exec(function(err, domains){
	// 	console.log(domains);
	// 	object = [];
	// 	for(var i=0; i<domains.length; i++){
	// 		object.push(domains[i]._id);
	// 	}
	// 	domainsDetail = {domainName: 'Domain 1', papers:object};
	// 	var domain = new DomainModel(domainsDetail);
	// 	domain.save(function(err){
	// 		if(err) console.log(err);
	// 		else console.log('saved');
	// 	});
	// });
	// DomainModel.find().populate({path:'papers', select:'title'}).exec(function(err, papers){console.log(JSON.stringify(papers))});
	// for(var i = 0; i<1000; i++){
	// 	var to = getRandom(40);
	// 	var from = getRandom(40);
	// 	while(to == from){
	// 		from = getRandom(40);
	// 	}
	// 	to = "Paper " + to.toString();
	// 	from = "Paper " + from.toString();

	// 	PaperModel.find({title:to}).select('_id').exec(function(err, toPaper){
	// 		PaperModel.find({title:from}).select('_id').exec(function(err, fromPaper){
	// 			var relation = new RelationModel({relationFrom:fromPaper[0]._id, relationTo:toPaper[0]._id, upvotes:[], downvotes:[], comments:[]});
	// 			relation.save(function(err){
	// 				if(err) console.log(err);
	// 				else console.log('Relation saved ');
	// 			});
	// 		});
	// 	});
	// }
	// for(var i=0; i<15; i++){
	// 	var userDetail = {userId:'user'+i.toString(), first_name:'First'+i.toString(), last_name:'Last'+i.toString(), email:'akhairna@asu.edu'};
	// 	var user = new UserModel(userDetail);
	// 	user.save(function(err){
	// 		if(err) console.log(err);
	// 		else console.log('saved successfully '+i.toString());
	// 	})
	// }
	console.log('Database connection successful!');
}