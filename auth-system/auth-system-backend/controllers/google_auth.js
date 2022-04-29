const passport = require("passport");
const successRedirect="localhost:3000"
const google_auth_controller = {
  loginWithGoogle: passport.authenticate("google", {
    scope: ["profile", "email"],
  }),

  googleCallback: passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login/failed",
  }),


};

module.exports = google_auth_controller;