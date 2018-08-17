var path = require("path");
var express		= require("express");
var app			= express.Router();
var friends		= require("../data/friends.js");
	
	//Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

module.exports = app;