const common_auth = {
  isAuthenticated: (req, res) => {
    const baseUrl = process.env.clientBaseUrl;

    if (req.user) {
      // res.redirect(`${baseUrl}/home`);

      res
        .status(200)
        .json({ message: "success", succes: true, user: req.user });
    } else {
      // res.redirect(`${baseUrl}`);
      res.status(401).json({ message: "failed", succes: false });
    }
  },
  logout: (req, res) => {
    if (req.user) {
      req.logout();
      req.session = null;
      res.clearCookie("session");
      res.clearCookie("session.sig");
      res.redirect(process.env.clientBaseUrl);
    } else {
      res.redirect(process.env.clientBaseUrl);
    }
  },
};

module.exports = common_auth;
