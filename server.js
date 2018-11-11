const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const passport = require("./config/passport");

// Define middleware here
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sessions
app.use(
  session({
    secret: "OSCS-session",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// app.post('/api/auth/signup', (req, res) => {
//   console.log("session test");
//   req.session.username = req.body.username;
//   res.end();
// })

// app.post('/api/auth/signup', (req, res, next) => {
//   console.log("server post username: " + req.body.username);
//   res.end();
// })

// app.use(express.static("./public")).get("*", function(req, res) {
//   res.sendfile("./public/index.html");
// });

app.get("*", function(req, res) {
  const index = path.join(__dirname, "build", ".public/index.html");
  res.sendFile(index);
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/OSCSmongo");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
