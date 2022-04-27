const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./auth_routes");
var session = require('express-session')
require("./passport");
require("dotenv").config();
app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.get("/", (req, res) => {
  res.send("http://localhost:5000/auth/google");
});

app.listen(5000, () => {
  console.log("server is running on port 3000");
});

