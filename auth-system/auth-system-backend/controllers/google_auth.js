const passport = require("passport");

const google_auth_controller = {
  loginWithGoogle: passport.authenticate("google", {
    scope: ["profile", "email"],
  }),

  googleCallback: passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login/failed",
  }),

  isAuthenticated: (req, res) => {
    if (req.user) {
      res.status(200).json({ message: "success", succes: true });
    } else {
      res
        .status(401)
        .json({ message: "failed to authenticate", succes: false });
    }
  },
};

module.exports = google_auth_controller;
