const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
require("dotenv").config();
const fs = require("fs");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      request.yoo = "hello";
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {

  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
