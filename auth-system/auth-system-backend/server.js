const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth_routes");
var cookieSession = require("cookie-session");
require("./services/passport");
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
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

//-------------------------------------- testing ---------------------------------------------------------------------------------
app.use("/auth", authRoute);
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the auth system xoxo",
  });
});

// app.get("/raw-google", (req, res) => {
//   var url = urlGoogle();

//   res.json({
//     message: url,
//   });
// });

// app.get("/auth/google/callback", async (req, res) => {
//   // var result=getGoogleAccountFromCode(google);
//   var result = req.url;
//   var code = result.split("code=")[1];
//   var codex = code.split("&scope=")[0];
//   codex = codex.replace(/%2F/g, "/");
//   var data = await getGoogleAccountFromCode(codex);
//   console.log(data);
//   res.json({
//     data,
//   });
// });

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 5000...");
});
