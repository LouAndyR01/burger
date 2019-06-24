    // required dependencies //
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
    // app variable to run express //
var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

    // these are the routes that are going to be used //
var routes = require("./controllers/burgers_controller.js");

   // setting up the static files //
app.use(express.static("public"));

    // body parser elements for url and json //
    // to handle the HTTP POST, this middleware is needed //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

    // setting up handlebars //
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

    // confirming connection with the server //
app.listen(PORT, function() {
    console.log("server is listening on: http://localhost:" + PORT);

});



