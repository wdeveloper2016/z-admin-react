var express = require('express');
var http = require("http");
var url = require("url");
var consolidate = require('consolidate');
var handlebars = require('handlebars');
var bodyParser = require('body-parser');
var routes = require('./routes');

// Create our app
var app = express();

app.use(express.static('public'));

var portNumber = process.argv[2] || 3000;

app.listen(portNumber, function () {
  console.log('Server listening at port '+ portNumber);
	routes.initialize(app);
});
