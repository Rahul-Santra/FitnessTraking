import express from "express";

import { authenticate } from "../middlewares/auth.middleware.js";

import {
  createLog,
  getLogs,
} from "../controllers/logs.controller.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  createLog
);

router.get(
  "/",
  authenticate,
  getLogs
);

export default router;