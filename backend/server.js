const port = process.env.PORT || 5000;
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";

import "./Passport/githubAuth.js";

import userRoutes from "./Routes/userRoute.js";
import authRoutes from "./Routes/authRoute.js";
import exploreRoutes from "./Routes/exploreRoute.js";
import connectingToDB from "./DB/ConnectingDB.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

app.listen(port, () => {
  console.log("Server running on Port : " + port);
  connectingToDB();
});
