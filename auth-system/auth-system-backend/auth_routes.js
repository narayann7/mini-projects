const router = require("express").Router();
const passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/login",
    failureRedirect: "/login/failed",
  })
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({ message: "failed to authenticate", succes: false });
});
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "success", succes: true, user: req.user });
  }else{
    res.status(401).json({ message: "failed to authenticate", succes: false });
  }
});

module.exports = router;