const router = require("express").Router();
const passport = require("passport");
require("../services/passport");
const google_auth_controller = require("../controllers/google_auth");
const common_auth = require("../controllers/common_auth");

// Google OAuth
router.get("/google", google_auth_controller.loginWithGoogle);
router.get("/google/callback", google_auth_controller.googleCallback);
router.get("/", common_auth.isAuthenticated);
router.post("/logout", common_auth.logout);

//todo
router.get("/login/failed", (req, res) => {
  res.status(401).json({ message: "failed to authenticate", succes: false });
});

module.exports = router;
