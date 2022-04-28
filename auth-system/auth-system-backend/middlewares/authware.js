const authware = {
  checkUser: (checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: "failed to authenticate", succes: false });
    res.redirect("/auth/google");
  }),

};

module.exports = authware;
