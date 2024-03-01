import passport from "passport";
import dotenv from "dotenv";
import { Strategy as GitHubStrategy } from "passport-github2";
import userModel from "../Models/user.model.js";

dotenv.config();

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Use the GitHubStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and GitHub
//   profile), and invoke a callback with a user object.
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
        const user = await userModel.findOne({ username: profile.username });
        if (!user) {
          const newUser = new userModel({
            name: profile.displayName,
            username: profile.username,
            profile_url: profile.profileUrl,
            avatar_url: profile.photos[0].value,
            liked_profiles: [],
            likedBy: [],
          });
          await newUser.save();
          done(null, newUser);
        } else {
          done(null, user);
        }
    }
  )
);
