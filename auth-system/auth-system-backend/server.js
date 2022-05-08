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
// app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.json({ url });
});

// app.get("/sendemail", async (req, res) => {
//   // const tokens = await getTokenFromUrl(url);
//   // console.log(tokens);

//   const options = {
//     to: "codeunique7@gmail.com",
//     replyTo: "majorskillz432@gmail.com",
//     subject: "Hello Amit 🚀",
//     text: "This email is sent from the command line",
//     textEncoding: "base64",
//     headers: [
//       { key: "X-Application-Developer", value: "Amit Agarwal" },
//       { key: "X-Application-Version", value: "v1.0.0.2" },
//     ],
//   };
//   // var result = await sendMail(options);
//   res.json({
//     message: "Welcome to the auth system xoxo",
//   });
// });

app.get("/test", (req, res) => {

  res.json({
    message: url,
  });
});

// app.get("/auth/google/callback", async (req, res) => {
//   // var result=getGoogleAccountFromCode(google);
//   var result = req.url;
//   var code = result.split("code=")[1];
//   var codex = code.split("&scope=")[0];
//   codex = codex.replace(/%2F/g, "/");

//   // var data = await getGoogleAccountFromCode(codex);
//   // console.log(data);
//   res.json({
//     hello: "helo",
//   });
// });

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 5000...");
});


