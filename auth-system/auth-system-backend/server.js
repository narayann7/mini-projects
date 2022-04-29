const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth_routes");
var cookieSession = require("cookie-session");
require("./services/passport");
require("dotenv").config();

app.use(
  cookieSession({
    name: "session",
    keys: ["catboy"],
    maxAge: 24 * 60 * 60 * 100,
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
  res.json({
    name: "catboy",
    message: "Welcome to the auth system",
  });
});
app.get("/test", (req, res) => {

    console.log(req.user);


  res.json({
    name: "catboy",
    message: "Welcome to the auth system",
  });
});


app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 5000...");
});
