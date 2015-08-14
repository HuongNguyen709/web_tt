var express = require('express');
var router = express.Router();
var model = require('../data.js');
var path = require('path');
/* GET home page. */

router.get('/', function(request, respone){
	model.subjectModel.find({}, function(err, docs){
		if (err) respone.end('Error while rendering route: ' + err);
		model.adminModel.findOne({}, function(err, doc){
			if(err) respone.end('Error while rendering route: ' + err);
			var title;
			if (!doc) {
				title = "Huong's Home Page";
			} else title = doc.title;
			respone.render('index', {subs: docs, title: title});
		});
	});
});

router.get('/home',function(request, respone){
	model.adminModel.findOne({}, function(err, doc){
		if(err) respone.end('Error while rendering route: ' + err);
		var contact;
		if(!doc){
			contact = "ddd";
		} else contact = doc.contact;
		console.log(doc);
		respone.render('home', {contact: contact});
	});
});
router.get('/home/home', function(request, respone){
	respone.render('home');
});
	// Login
router.get('/login', function(request, respone){
	respone.render('login');
});
router.get('/admin', function(request, respone){
	model.adminModel.findOne({}, function(err, doc){
		if(err) res.end();
		else respone.render('admin', {info_name: doc});
	});
});
router.get('/login-fail', function(request, respone){
	respone.render('login-fail');
});
router.get('/login-success', function(request, respone){
	model.subjectModel.find({},function(err,docs){
		if (err) respone.end('Error while rendering route: ' + err);
		respone.render('login-success', {subs: docs});
	});
});
router.get('/add-new-subject', function(request, respone){
	respone.render('add-new-subject');
});
router.get('/manage-subject', function(request, respone){
	model.subjectModel.find({},function(err,docs){
		if (err) respone.end('Error while rendering route: ' + err);
		respone.render('login-success', {subs: docs});
	});
});
router.get('/manage-account', function(request, respone){
	respone.render('manage-account');
});
router.get('/manage-about', function(request, respone){
	model.adminModel.findOne({}, function(err, doc){
		if(err) res.end();
		else respone.render('manage-about', {info: doc, conta: doc});
	});
});
	//edit
router.get('/edit-data', function(request, respone){
	respone.render('edit-data');
});
router.get('/view-subject/:id',function(request, respone){
	var subjectId = request.params.id;
	model.subjectModel.findOne({_id: subjectId},function(err,doc){
		if (err) respone.end('Error while rendering route: ' + err);
		respone.render('view-subject', {subject: doc});
	});
});
router.get('/add-new-slide/:id', function(request, respone){
	var subjectId = request.params.id;
	model.subjectModel.findOne({_id: subjectId}, function(err, doc){
		if(err) respone.end('Error while rendering route: ' + err);
		respone.render('add-new-slide', {subject: doc});
	});
});
router.get('/add-new-exercise/:id', function(request, respone){
	var subjectId = request.params.id;
	model.subjectModel.findOne({_id: subjectId}, function(err, doc){
		if(err) respone.end('Error while rendering route: ' + err);
		respone.render('add-new-exercise', {subject: doc});
	});
});
router.get('/add-new-reference/:id', function(request, respone){
	var subjectId = request.params.id;
	model.subjectModel.findOne({_id: subjectId}, function(err, doc){
		if(err) respone.end('Error while rendering route: ' + err);
		respone.render('add-new-reference', {subject: doc});
	});
});
	//slide-subject
router.get('/slide-subject/:id',function(request, respone){
	var subjectId = request.params.id;
	model.subjectModel.findOne({_id: subjectId},function(err,doc){
		
		if (err) respone.end('Error while rendering route: ' + err);
		model.fileModel.find({_id: {$in: doc.Slides}}, function(err,docs){
			console.log(doc);
			console.log(docs);
			respone.render('slide-subject',{subject: doc, slides: docs})
		})
	});
});
	//exercise-subject
router.get('/exercise-subject/:id', function(request, respone){
	var subjectId = request.params.id;
	model.subjectModel.findOne({_id: subjectId}, function(err, doc){
		respone.render('exercise-subject', {subject: doc});
	});
});
	//reference-subject
router.get('/reference-subject/:id', function(request, respone){
	var subjectId = request.params.id;
	model.subjectModel.findOne({_id: subjectId}, function(err, doc){
		respone.render('reference-subject', {subject: doc});
	});
});

module.exports = router; 