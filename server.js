//Initialize
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var http = require("http");
var AYLIENTextAPI = require('aylien_textapi');



//Express
var app = express();
var PORT = process.env.PORT || 3000;

// models
var db = require("./models");


//parsing for express
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({"extended": true}));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



//---------------------------------------------------------------------------
//routes
//--------------------------------------------------------------------
app.use(express.static("public"));
var apiRoutes = require('./routes/api-routes')
app.use('/', apiRoutes)
require("./routes/html-routes")(app);

// app.use("/", routes);
// app.use("/gist", gist);
// app.use("/api", api);

// app.use(express.static("public"));

// var Api = require("./routes/api-routes.js")(app);

app.use(methodOverride("_method"));



db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
//---------------------------------------------------------------------------
//Text summarize api set up
//----------------------------------------------------------

//---------------------------------------------------------------------------
//setting up a summarized function to be called back when data is passed
//--------------------------------------------------------------------
