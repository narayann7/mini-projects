const { google } = require("googleapis");
require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios").default;
const googleConfig = {
  clientID:
    "184038764932-amin5d0ptq8v7bohisuj3udp29s0piq5.apps.googleusercontent.com",
  clientSecret: "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",
  redirect: "http://localhost:5000/auth/google/callback",
};

const defaultScope = [
  "https://www.googleapis.com/auth/plus.me",
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
];

/*************/
/** HELPERS **/
/*************/

function createConnection() {
  return new google.auth.OAuth2(
    googleConfig.clientID,
    googleConfig.clientSecret,
    googleConfig.redirect
  );
}

function getConnectionUrl(auth) {
  return auth.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: defaultScope,
  });
}

function getGooglePlusApi(auth) {
  return google.plus({ version: "v1", auth });
}

/**********/
/** MAIN **/
/**********/

/**
 * Part 1: Create a Google URL and send to the client to log in the user.
 */
function urlGoogle() {
  const auth = createConnection();
  const url = getConnectionUrl(auth);
  return url;
}

/**
 * Part 2: Take the "code" parameter which Google gives us once when the user logs in, then get the user's email and id.
 */
async function getGoogleAccountFromCode(code) {
  const auth = createConnection();
  const { tokens } = await auth.getToken(code);
  console.log(auth.credentials);
  var getUserUrl =
    "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=";
  getUserUrl += tokens.access_token;

  var result = await axios.get(getUserUrl);
  if (result.status === 200) {
    return result.data;
  }
  return null;
}

app.get("/raw-google", (req, res) => {
  var url = urlGoogle();

  res.json({
    message: url,
  });
});

app.get("/auth/google/callback", async (req, res) => {
  // var result=getGoogleAccountFromCode(google);
  var result = req.url;
  var code = result.split("code=")[1];
  var codex = code.split("&scope=")[0];
  codex = codex.replace(/%2F/g, "/");
  var data = await getGoogleAccountFromCode(codex);
  console.log(data);
  res.json({
    data,
  });
});

module.exports = { urlGoogle, getGoogleAccountFromCode };
