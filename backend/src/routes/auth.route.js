import express from "express";
import {
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection);

router.post("/signup", signup);

router.post("/login", arcjetProtection, login);

router.post("/logout", logout);

router.put("/update-profile", authenticate, updateProfile);

router.get("/me", authenticate, (req, res) => res.status(200).json(req.user));

export default router;
