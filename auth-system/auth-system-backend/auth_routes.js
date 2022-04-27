const router = require("express").Router();
const passport = require("passport");
require("./passport");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login/failed",
  })
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({ message: "failed to authenticate", succes: false });
});

router.post("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});
checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};
router.get("/test", checkAuthenticated, function (req, res) {
  res.send(req.user);
});

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "success", succes: true, user: req });
  } else {
    res.status(401).json({ message: "failed to authenticate", succes: false });
  }
  // res.send(req.user);
});

module.exports = router;
