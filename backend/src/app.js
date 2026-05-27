import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import cycleRoutes from "./routes/cycle.routes.js";
import workoutRoutes from "./routes/workout.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import logsRoutes from "./routes/logs.routes.js";

import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message:
      "Fitness API Running",
  });
});

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/profile",
  profileRoutes
);

app.use(
  "/api/cycle",
  cycleRoutes
);

app.use(
  "/api/workouts",
  workoutRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.use(
  "/api/logs",
  logsRoutes
);

app.use(errorMiddleware);

export default app;