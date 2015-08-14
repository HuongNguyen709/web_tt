var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

	/*--Subjects--*/
var Subjects = new Schema({
	name: String,
	Slides: [String],
	Exercises : [String],
	References : [String]
});
	/*--Files--*/
var Files = new Schema({
	name: String,
	path: String
});	
	/*--admin--*/
var Admin = new Schema({
	name: String,
	passwd: String,
	title: String,
	contact: String
});
module.exports = {
	subjectModel: mongoose.model('Subject', Subjects),
	fileModel: mongoose.model('File', Files),
	adminModel: mongoose.model('Admin', Admin), 
}