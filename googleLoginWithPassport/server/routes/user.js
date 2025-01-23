import express from "express";
import passport from "passport";
import {
  getAdminUsers,
  logout,
  myProfile,
} from "../controllers/user.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/login",
  // passport.authenticate("google", {
  //   successRedirect: process.env.FRONTEND_URL,
  // })
  passport.authenticate("google"),
  (req, res, send) => {
    res.send('logedIn')
  }
);

router.get("/me", isAuthenticated, myProfile);

router.get("/logout", logout);

// Admin Routes
router.get("/admin/users", isAuthenticated, authorizeAdmin, getAdminUsers); //show users to admin


export default router;
