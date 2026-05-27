import express from "express";

import { authenticate } from "../middlewares/auth.middleware.js";

import {
  getTodayWorkout,
  completeUserWorkout,
  getWorkoutHistory,
} from "../controllers/workout.controller.js";

const router = express.Router();

router.get(
  "/today",
  authenticate,
  getTodayWorkout
);

router.post(
  "/complete",
  authenticate,
  completeUserWorkout
);

router.get(
  "/history",
  authenticate,
  getWorkoutHistory
);

export default router;