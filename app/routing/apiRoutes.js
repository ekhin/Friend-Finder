var express		= require("express");
var app			= express.Router();
var friends		= require("../data/friends.js");

app.get("/friends", function (req, res){
	res.send(friends);
});

app.post("/friends", function(req, res){
	res.setHeader('Content-Type', 'application/json');
	var userData = req.body.data || {};
	var userScores = userData.scores || [];
	var newFriend = {};
	var leastDiff = 50;
	
    // i = user's data
	for(var i = 0; i< friends.length; i++){
		var scoreDiff = 0;
    // j = user's score
		for(var j = 0; j < userScores.length; j++){
			scoreDiff +=  Math.abs(friends[i].scores[j] - userScores[j]);
		}
		if(scoreDiff < leastDiff){
			leastDiff = scoreDiff;
			newFriend = friends[i];
		}
	}
	friends.push(userData);
	res.status(200).send(newFriend);
});


module.exports = app;