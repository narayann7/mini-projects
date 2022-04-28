const common_auth = {
  isAuthenticated: (req, res) => {
    const baseUrl = process.env.clientBaseUrl;

    if (req.user) {
      res.redirect(`${baseUrl}/home`);

      // res
      //   .status(200)
      //   .json({ message: "success", succes: true, user: req.user });
    } else {
      res.redirect(`${baseUrl}`);
    }
  },
  logout: function (req, res) {
    req.logout();
    res.redirect("/");
  },
};

module.exports = common_auth;
