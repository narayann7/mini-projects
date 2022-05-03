const passport = require("passport");
const twitter_auth_controller = {
  loginWithTwitter: passport.authenticate("twitter"),

 twitterCallback: passport.authenticate("twitter", {
    successRedirect: `${process.env.clientBaseUrl}`,
    failureRedirect: "/login/failed",
  }),
};

module.exports = twitter_auth_controller;
