const passport = require("passport");
const github_auth_controller = {
  loginWithGithub: passport.authenticate("github", {
    scope: ["profile", "email"],
  }),

  githubCallback: passport.authenticate("github", {
    successRedirect: process.env.clientBaseUrl,
    failureRedirect: "/login/failed",
  }),
};

module.exports = github_auth_controller;
