const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
// const authRoute = require("./routes/auth_routes");
var cookieSession = require("cookie-session");
// require("./services/passport");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { urlGoogle, getGoogleAccountFromCode } = require("./services/google");
const { google } = require("googleapis");
app.use(
  cookieSession({
    name: "session",
    keys: ["catboy"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(cookieParser());
app.use(passport.initialize());
// app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

//-------------------------------------- testing ---------------------------------------------------------------------------------
// app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.cookie(`hellox`, `encrypted cookie string Value`);
  res.json({
    message: "Welcome to the auth system",
  });
});
app.get("/test", (req, res) => {
  var url = urlGoogle();

  res.json({
    message: url,
  });
});
app.get("/test2", (req, res) => {
  var code =
    "4%2F0AX4XfWh3nAYRnBwgem0-L9AoDFo0bB-l5h53--evuymt3ju6vWc6WzXmJEwxR3SyhSJckw&scope=email+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=consent";
  var tokens = getGoogleAccountFromCode(code);
  res.json({
    tokens,
  });
});

app.get("/auth/google/callback",  (req, res) => {
  // var result=getGoogleAccountFromCode(google);
  var result = req.url;
  var code = result.split("code=")[1];
  var codex = code.split("&scope=")[0];
  codex=codex.replace(/%2F/g,"/");
  getGoogleAccountFromCode(codex);
  res.json({
    result
    ,
    code,
    codex
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 5000...");
});
