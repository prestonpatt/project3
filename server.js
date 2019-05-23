require("dotenv").config();
const path = require("path");
const router = require("express").Router();


var express = require("express");
var exphbs = require("express-handlebars");


var db = require("./models");

var app = express();
var PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("client/build"));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/auth")(app);
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
