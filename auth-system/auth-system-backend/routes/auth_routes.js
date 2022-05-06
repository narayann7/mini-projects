// const router = require("express").Router();
// const passport = require("passport");
// require("../services/passport");
// const google_auth_controller = require("../controllers/google_auth");
// const github_auth_controller = require("../controllers/github_auth");
// const twitter_auth_controller = require("../controllers/twitter_auth");
// const common_auth = require("../controllers/common_auth");

// // Google OAuth
// router.get("/google", google_auth_controller.loginWithGoogle);
// router.get("/google/callback", google_auth_controller.googleCallback);

// //Github OAuth
// router.get("/github", github_auth_controller.loginWithGithub);
// router.get("/github/callback", github_auth_controller.githubCallback);

// // Twitter OAuth
// router.get("/twitter", twitter_auth_controller.loginWithTwitter);
// router.get("/twitter/callback", twitter_auth_controller.twitterCallback);

// //comman auth
// router.get("/", common_auth.isAuthenticated);
// router.get("/logout", common_auth.logout);

// //todo
// router.get("/login/failed", (req, res) => {
//   res.status(401).json({ message: "failed to authenticate", succes: false });
// });

// module.exports = router;
