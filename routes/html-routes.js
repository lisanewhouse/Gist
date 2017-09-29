//Dependencies
var path = require("path");
var express = require("express");


// var app = express.Router();

//Routes
module.exports = function(app) {

	// Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/search", function(req, res) {
    res.render("./public/search");
  });

  


  // app.get("/politics", function(req, res) {
  //   res.sendFile("..views.politics.handlebars");
  // });


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index"));

});

};
