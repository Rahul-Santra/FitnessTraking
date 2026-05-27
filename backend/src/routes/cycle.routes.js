import express from "express";

import { authenticate } from "../middlewares/auth.middleware.js";

import {
  createCycle,
  getCycle,
  updateCycle,
} from "../controllers/cycle.controller.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  createCycle
);

router.get(
  "/",
  authenticate,
  getCycle
);

router.put(
  "/",
  authenticate,
  updateCycle
);

export default router;