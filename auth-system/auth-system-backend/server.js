const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth_routes");
var cookieSession = require("cookie-session");
require("./services/passport");
require("dotenv").config();
const cookieParser = require('cookie-parser')
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
app.use("/auth", authRoute);



app.get("/", (req, res) => {

  res.cookie(`hellox`,`encrypted cookie string Value`);
  res.json({

    message: "Welcome to the auth system",
  });
});
app.get("/test", (req, res) => {



  res.json({
   "cookie":req.cookies
  });
});


app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 5000...");
});
