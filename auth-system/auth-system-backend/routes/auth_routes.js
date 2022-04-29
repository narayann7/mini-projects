const router = require("express").Router();
const passport = require("passport");
require("../services/passport");
const google_auth_controller = require("../controllers/google_auth");
const common_auth = require("../controllers/common_auth");

// Google OAuth
router.get("/google", google_auth_controller.loginWithGoogle);
router.get("/google/callback", google_auth_controller.googleCallback);
router.get("/", common_auth.isAuthenticated);
router.get("/logout", common_auth.logout);

//todo
router.get("/login/failed", (req, res) => {
  res.status(401).json({ message: "failed to authenticate", succes: false });
});



app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["profile", "email"] })
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    successRedirect: process.env.clientBaseUrl,
    failureRedirect: "/login/failed",
  })
);



app.get('/auth/twitter',
  passport.authenticate('twitter'));

app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { 
    // successRedirect: process.env.clientBaseUrl,
    failureRedirect: "/login/failed",
  
  }),

  function(req, res) {
    console.log(req.user)
    res.redirect('/');
    }


  );








module.exports = router;
