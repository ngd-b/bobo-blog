var express = require("express");
var path = require("path");
var bodyParse = require("body-parse");

var routes = require("./routes");

var app = express();

app.use(bodyParse.json());

routes(app);

if(module.parent){
	module.exports = app;
}else{
	app.listen(3000,function(){
	console.log("server listening on 3000 port!");
});
}
