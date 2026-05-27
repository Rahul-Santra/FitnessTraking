import express from "express";

import { authenticate } from "../middlewares/auth.middleware.js";

import {
  createProfile,
  getProfile,
  updateProfile,
} from "../controllers/profile.controller.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  createProfile
);

router.get(
  "/",
  authenticate,
  getProfile
);

router.put(
  "/",
  authenticate,
  updateProfile
);

export default router;