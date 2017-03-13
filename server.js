var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js")

var app = express();
var PORT = 3000;

//Express Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routing
app.get('/survey', htmlRoutes.survey);
app.get('/api/friends', apiRoutes.friends);
app.post('/api/friends', apiRoutes.newProf);
app.use('/', htmlRoutes.home);




//Port Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  console.log(htmlRoutes.survey);
});
