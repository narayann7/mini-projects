const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./auth_routes");
const cookieSession = require("cookie-session");
require("./passport");
require("dotenv").config();
app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey],
  })
);
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
  res.send("hello");
});

app.listen(5000, () => {
  console.log("server is running on port 3000");
});

