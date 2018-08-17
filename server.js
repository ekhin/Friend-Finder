var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var apiRoutes = require(path.join(__dirname, "app/routing/apiRoutes"));
app.use("/api", apiRoutes);

var htmlRoutes = require(path.join(__dirname, "app/routing/htmlRoutes"));
app.use("", htmlRoutes);

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});