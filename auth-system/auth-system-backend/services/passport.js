// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const GitHubStrategy = require("passport-github2").Strategy;
// const TwitterStrategy = require("passport-twitter").Strategy;
// const passport = require("passport");
// require("dotenv").config();
// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: process.env.githubClientID,
//       clientSecret: process.env.githubClientSecret,
//       callbackURL: "/auth/github/callback",
//       passReqToCallback: true,
//     },
//     function (request, accessToken, refreshToken, profile, done) {
//       return done(null, profile);
//     }
//   )
// );
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.googleClientID,
//       clientSecret: process.env.googleClientSecret,
//       callbackURL: "/auth/google/callback",
//       passReqToCallback: true,
//     },
//     function (request, accessToken, refreshToken, profile, done) {
//       profile.accessToken = accessToken;
//       return done(null, profile);
//     }
//   )
// );

// passport.use(
//   new TwitterStrategy(
//     {
//       consumerKey: process.env.twitterConsumerKey,
//       consumerSecret: process.env.twitterConsumerSecret,
//       callbackURL: "/auth/twitter/callback",
//       passReqToCallback: true,
//     },
//     function (request, accessToken, refreshToken, profile, done) {
//       return done(null, profile);
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });
