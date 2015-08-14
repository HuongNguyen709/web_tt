var express =  require('express');
var models = require('../data.js');
var router = express.Router();
//add subject
router.post('/new-subject', function(req, res){
	var subjectName = req.body.name;
	var newSubject = new models.subjectModel();
	newSubject.name = subjectName;
	newSubject.save(function(err,post){
		if(error) console.log(error);
		else console.log(post);
	});
});
router.post('/title', function(req, res){
	var adminTitle = req.body.title;
	models.adminModel.findOne({},function(err,doc){
		if(!doc){
			var newAdmin = new models.adminModel();
			newAdmin.title = adminTitle;
			newAdmin.save(function(err){
				if (err) res.end('err');
				else res.end('Edit Success!');
			});
		} else {
			doc.title = adminTitle;
			doc.save(function(err){
				if (err) res.end('err');
				else res.end('Edit Success!');
			});
		}
	});
});
router.post('/contact', function(req, res){
	var adminContact = req.body.contact;
	models.adminModel.findOne({},function(err,doc){
		if(!doc){
			var newAdmin = new models.adminModel();
			newAdmin.contact = adminContact;
			newAdmin.save(function(err){
				if (err) res.end('err');
				else res.end('Success!');
			});
		} else {
			doc.contact = adminContact;
			doc.save(function(err){
				if (err) res.end('err');
				else res.end('Edit Success!');
			});
		}
	});
});
router.post('/name', function(req, res){
	var adminName = req.body.name;
	models.adminModel.findOne({}, function(err, doc){
		if(!doc){
			var newAdmin = new models.adminModel();
			newAdmin.name = adminName;
			newAdmin.save(function(err){
				if(err) res.end('err');
				else res.end('Success');
			});
		} else {
			doc.name = adminName;
			doc.save(function(err){
				if(err) res.end('err');
				else res.end('Edit Success');
			});
		}
	});
});

//Upload
router.post('/upload/new-slide', function(req, res){
	console.log(req.query.id);
	console.log(req.query.section);
	var multiparty = require('multiparty');
	var form = new multiparty.Form();
	form.parse(req, function(err, fields, files){
		var sld = files.slide[0];  
		var fs = require('fs');
		fs.readFile(sld.path, function(err, data){
			var path = "./public/upload/" + sld.originalFilename;
			fs.writeFile(path, data, function(error){
				var fileName = req.body.name;
				var newFile = new models.fileModel();
				newFile.save(function(err, post){
					if(error) console.log(error);
					else console.log(post);
				});
				
			});
		});
	});
});
//Download
/*router.get('/download', function(req, res){
	var file = __dirname + './upload/slide';
	var filename = path.basename(file);
	var mimename = path.lookup(file);
	res.setHeader('Content-disposition', 'attachment; filename=' + filename);
	res.setHeader('Content-type' + mimename);
	var filestream = fs.createReadStream(file);
	filestream.pipe(res);
}); */
/*router.get('/download', function(req, res){
	res.send('/public/html/index.html');
});*/
/*router.get('/file(*)', function(){
	var file = req.paramas.file;
	var path = __dirname + '/upload/new-slide';
	res.download(path);
});*/
module.exports = router;