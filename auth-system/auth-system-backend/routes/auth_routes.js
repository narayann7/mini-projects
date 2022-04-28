const router = require("express").Router();
const passport = require("passport");
require("../services/passport");
const google_auth_controller = require("../controllers/google_auth");

router.get("/google", google_auth_controller.loginWithGoogle);
router.get("/google/callback", google_auth_controller.googleCallback);

//extra code
router.get("/login/failed", (req, res) => {
  res.status(401).json({ message: "failed to authenticate", succes: false });
});

router.post("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/", google_auth_controller.isAuthenticated);

module.exports = router;
