const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const passport = require("./config/passport");

// Socket.io stuff
let server = require("http").Server(app);
let io = require("socket.io")(server);
const portt = process.env.port || 8989;
let users = {};
getUsers = () => {
  return Object.keys(users).map(function(key) {
    return users[key].username;
  });
};
createSocket = user => {
  let cur_user = users[user.uid],
    updated_user = {
      [user.uid]: Object.assign(cur_user, {
        sockets: [...cur_user.sockets, user.socket_id]
      })
    };
  users = Object.assign(users, updated_user);
};
createUser = user => {
  users = Object.assign(
    {
      [user.uid]: {
        username: user.username,
        uid: user.uid,
        sockets: [user.socket_id]
      }
    },
    users
  );
};
removeSocket = socket_id => {
  let uid = "";
  Object.keys(users).map(function(key) {
    let sockets = users[key].sockets;
    if (sockets.indexOf(socket_id) !== -1) {
      uid = key;
    }
  });
  let user = users[uid];
  if (user.sockets.length > 1) {
    // Remove socket only
    let index = user.sockets.indexOf(socket_id);
    let updated_user = {
      [uid]: Object.assign(user, {
        sockets: user.sockets
          .slice(0, index)
          .concat(user.sockets.slice(index + 1))
      })
    };
    users = Object.assign(users, updated_user);
  } else {
    // Remove user by key
    let clone_users = Object.assign({}, users);
    delete clone_users[uid];
    users = clone_users;
  }
};
server.listen(portt, () => {
  console.log("Running server on 127.0.0.1:" + PORT);
});
// Back to your regularly scheduled code

// Define middleware here
app.use(morgan("dev"));
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

// More Socket.io stuff
io.on("connection", socket => {
  let query = socket.request._query,
    user = {
      username: query.username,
      uid: query.uid,
      socket_id: socket.id
    };

  if (users[user.uid] !== undefined) {
    createSocket(user);
    socket.emit("updateUsersList", getUsers());
  } else {
    createUser(user);
    io.emit("updateUsersList", getUsers());
  }

  socket.on("message", data => {
    console.log(data);
    socket.broadcast.emit("message", {
      username: data.username,
      message: data.message,
      uid: data.uid
    });
  });

  socket.on("disconnect", () => {
    removeSocket(socket.id);
    io.emit("updateUsersList", getUsers());
  });
});
